window.jermaine.util.namespace("window.ide", function (ns) {
    var Button = ns.Button;
    var Project = ns.Project;

    //////////////// IDE MODEL /////////////////////////
    var IDE = new window.jermaine.Model (function () {
        this.hasAn("editor").which.isImmutable();
        this.hasA("directory").which.isA("string");

        this.hasA("project").which.validatesWith(function (project) {
            return project instanceof Project;
        });

        this.hasA("changedFlag").which.isA("boolean").and.defaultsTo(false);

        this.hasMany("messages").eachOfWhich.isA("string");
        this.hasMany("buttons").which.validateWith(function (button) {
            return button instanceof Button;
        });

        this.hasA("view");

        this.isBuiltWith("directory", function () {
            var that = this;

            //initialize editor as ace editor
            this.editor(ace.edit("IDE-editor"));
            this.editor().setTheme("ace/theme/eclipse");
            this.editor().setHighlightActiveLine(false);
            this.editor().renderer.setShowPrintMargin(false);

            this.editor().getSession().on("change", function () {
                that.changedFlag(true);
            });

            this.view(new IDEView(this));
        });
    });
    //////////////// IDE MODEL /////////////////////////

    //////////////// IDE VIEW //////////////////////////
    var IDEView = new window.jermaine.View (function () {
        var messageTimer,
            messageTimeout = 5000;

        //////////////// SKETCH RELATED STUFF //////////////////////////
        this.respondsTo("deleteSketch", function (name) {
            var that = this;
            var instance = this.instance();
            if (confirm("Are you sure you want to delete '"+name+"'?"))  {
                $.post("sketches/"+name+"/delete", function (response) {
                    if ($("#"+name).hasClass("active")) {
                        if ($("#"+name).next("div.directory_listing").size() > 0) {
                            $("#"+name).next("div.directory_listing").trigger("click");
                        } else if ($("#"+name).prev("div.directory_listing").size() > 0) {
                            $("#"+name).prev("div.inactive").trigger("click");
                        } else {
                            that.setUpEmptyDirectory();
                        }
                    }
                    $("#"+name).fadeOut(function () {
                        $("#"+name).remove();
                    });
                });
            }
        });

        this.respondsTo("createNewSketch", function (name) {
            var that = this,
                instance = this.instance(),
                directoryEntryTemplate = Handlebars.compile($("#directory-entry-partial").html());

            $.post("sketches/new", {"title":name}, function (sketch) {
                var p = {"title":sketch.title,"name":sketch.slug,"url":sketch.slug+".json"};

                //because this is returning strings on error :(
                if (typeof (sketch) === "object") {
                    var menuEntry = $($.trim(directoryEntryTemplate(p)));
                    menuEntry.hide();
                    menuEntry.insertAfter("#new_sketch_div");
                    
                    if ($("#empty_directory").size() > 0) {
                        $("#empty_directory").remove();
                        $("#IDE-title").click(function () {
                            that.toggleEditorAndDirectory();
                        });
                    };

                    menuEntry.children("span").click(function () {
                        that.deleteSketch($(this).parent("div").attr("id"));
                        return false;
                    });

                    menuEntry.click(function () {
                        that.setActiveMenuItem(this);
                        return false;
                    });

                    $("#new_sketch_div").fadeOut(function () {
                        $("#new_sketch_input").val("");
                        menuEntry.fadeIn(function () {
                            menuEntry.trigger("click");
                        });
                    });
                } else {
                    console.log(sketch);
                }
            });
        });
        //////////////// SKETCH RELATED STUFF //////////////////////////

        //////////////// DIRECTORY RELATED STUFF //////////////////////////
        this.respondsTo("setActiveMenuItem", function (elt) {
            var project = this.instance().project();
            if (project !== undefined) {
                console.log("#"+project.url().match(/\/(.*)\.json/)[1]);
                $("#"+project.url().match(/\/(.*)\.json/)[1])
                    .removeClass("active")
                    .addClass("inactive");
            }
            $(elt).addClass("active").removeClass("inactive");
            this.instance().project(new Project($(elt).find("a").attr("href")));
            //that.toggleEditorAndDirectory();
        });

        this.respondsTo("setUpEmptyDirectory", function () {
            $("#IDE-title").unbind("click");
            $("#IDE-title").html("&nbsp;");
            $("#directory").append("<div id='empty_directory'><h3>you have no sketches :(</h3></br></br><h3>click the button above to add one :)</h3></div>");
        });

        this.respondsTo("toggleEditorAndDirectory", function () {
            var that = this;
            var direction = $("#ide").is(":visible")?"lr":"rl";
            var elementA = $("#ide").is(":visible")?$("#ide"):$("#IDE-directory");
            var elementB = $("#ide").is(":visible")?$("#IDE-directory"):$("#ide");
            
            elementA.flip({
                speed: 200,
                direction:direction,
                color:"#fff",
                onBefore: function () {
                    elementA.hide();
                    $("#IDE-title").unbind("click");
                },
                onEnd: function () {
                    elementB.show();
                    if ($("#empty_directory").size() === 0) {
                        $("#IDE-title").click(function () {
                            that.toggleEditorAndDirectory();
                        });
                    }
                    //this is a hack to force Ace to update when the editor
                    //becomes visible again
                    if ($("#ide").is(":visible")) {
                        that.instance().editor().setValue(that.instance().editor().getValue());
                        that.instance().editor().gotoLine(0,0);
                    }
                    
                }
            });
        });
        //////////////// DIRECTORY RELATED STUFF //////////////////////////

        //////////////// EDITOR RELATED STUFF //////////////////////////
        this.respondsTo("addButtons", function () {
            var that = this;

            this.instance().buttons().add(new Button("run", "images/icons/run.png", function () {
                that.instance().messages().add("running program");
                return false;
            }));

            if ($("#ide").hasClass("server")) {
                this.instance().buttons().add(new Button("save", "images/icons/save.png", function () {
                    if (that.instance().changedFlag() === false) {
                        that.instance().messages().add("no changes need to be saved");
                    } else {
                        that.instance().project().source(that.instance().editor().getSession().getValue());
                        that.instance().project().save(function (response) {
                            that.instance().messages().add(response);
                            that.instance().changedFlag(false);
                        });
                    }
                }));
            }
        });

        this.respondsTo("setUpProcessingRunner", function () {
            var p;  //processing object
            var error;  //processing error
            var that = this;
            
            $("#IDE-run_button").colorbox({
                'title' : this.instance().project().title(),
                'inline' : true,
                'scrolling' : false,
                'href':"#canvas",
                'onLoad' : function()  {
                    var width, height;
                    var code = that.instance().editor().getSession().getValue();
                    var canvas = document.getElementById("processing_canvas");
                    error = null;
                    
                    try  {

                        var dimensions = code.match(/\s+size\((\d+),(\d+)\)/);
                        if (dimensions !== null) {
                            width = parseInt(dimensions[1]);
                            height = parseInt(dimensions[2]);
                        } else {
                            width = 200;
                            height = 200;
                        }
                        $("#processing_canvas").css('width',width);
                        $("#processing_canvas").css('height',height);
                        p = new Processing(canvas, code);
                    }
                    catch(err)  {
                        error = err;
                        Processing.logger.log(err);
                        if(p)  {
                            p.exit();
                        }
                    }
                },
                
                'onComplete' : function()  {
                    if(error)  {
                        console.log(error);
                        $.colorbox.close();
                    } else  {
                        $("#processing_canvas").focus();
                    }
                },
                'onCleanup' : function()  {
                    if(p)  {
                        p.exit();
                    }
                }
            });
        });
        //////////////// EDITOR RELATED STUFF //////////////////////////

        this.initializesWith(function () {
            var that = this;

            //set up the click responder on the title
            $("#IDE-title").click(function () {
                that.toggleEditorAndDirectory();
            });

            this.addButtons();
        });

        this.watches("messages", function (newMessage) {
            if (messageTimer !== null) {
                clearTimeout(messageTimer);
            }
            
            $("#IDE-message").css("display", "none");
            $("#IDE-message").text(newMessage);
            $("#IDE-message").fadeIn();
            
            messageTimer = setTimeout(function()  {
                $("#IDE-message").fadeOut();
            }, messageTimeout);
        });

        this.watches("project", function (newProject) {
            $("#IDE-directory #" + this.instance().project().url().match(/\/(.*)\.json/)[1])
                .addClass("active")
                .removeClass("inactive");
            this.setUpProcessingRunner();
        });

        this.watches("project.title", function (newTitle) {
            $("#IDE-title").text(newTitle);
        });
        
        this.watches("project.source", function (newSource) {
            this.instance().editor().getSession().setValue(newSource);
            this.instance().changedFlag(false);
        });
        
        this.watches("buttons", function (newButton) {
            var button = $($.trim(newButton.view().render()));
            //add click function
            button.click(function () {
                newButton.handler()();
            });
            $("#IDE-buttons").append(button);
        });

        this.watches("directory", function (newDirectory) {
            var instance = this.instance(),
                that = this;

            $.getJSON(newDirectory, function (result) {
                var directoryTemplate = Handlebars.compile($("#directory-template").html());
                Handlebars.registerPartial("directory-entry", $("#directory-entry-partial").html());
                for (i = 0; i < result.length; ++i) {
                    result[i]["name"] = result[i]["url"].match(/(.*).json/)[1];
                }
                $("#IDE-directory").append(directoryTemplate({project:result}));

                $(".directory_listing").each(function (i, elt) {
                    $(elt).click(function () {
                        that.setActiveMenuItem(this);
                        return false;
                    });
                });

                if (result.length > 0) {
                    instance.project(new Project("sketches/" + result[0].url));
                } else {
                    //show directory
                    that.toggleEditorAndDirectory();
                    that.setUpEmptyDirectory();
                }

                if ($("#ide").hasClass("server")) {
                    $("#new_sketch_button").click(function () {
                        if ($("#new_sketch_div").is(":visible")) {
                            $("#new_sketch_div").slideUp(function () {
                                $("#new_sketch_input").val("");
                            });
                        } else {
                            $("#new_sketch_div").slideDown();
                        }
                    });

                    $("#new_sketch_input").keypress(function (e) {
                        if (e.keyCode === 13 && $(this).val() !== "" ) {
                            that.createNewSketch($(this).val());
                        }
                    });

                    $(".delete_sketch_button").click(function () {
                        that.deleteSketch($(this).parent("div").attr("id"));
                        return false;
                    });
                }
            });
        });
    });
    //////////////// IDE VIEW //////////////////////////

    ns.IDE = IDE;
});
