/**
Copyright (C) 2011 by Semmy Purewal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
**/

(function (window)  {
    //////////////// BUTTON /////////////////////
    var Button = new window.jermaine.Model(function () {
        this.hasA("name").which.isA("string");
        this.hasAn("imageURL").which.isA("string");
        this.hasA("handler").which.isA("function");

        this.hasA("view").which.validatesWith(function (v) {
            return v instanceof window.jermaine.BaseView;
        });

        this.isBuiltWith("name", "imageURL", "handler", function () {
            var that = this;
            this.view(new ButtonView(this));
        });
    });

    var ButtonView = new window.jermaine.View(function () {
        var buttonTemplate = Handlebars.compile($("#button-template").html());
        this.rendersWith(function (jsonRep) {
            return buttonTemplate(jsonRep);
        });
    });
    //////////////// BUTTON /////////////////////

    //////////////// PROJECT /////////////////////
    var Project = new window.jermaine.Model(function () {
        this.hasA("title").which.isA("string");
        this.hasA("source").which.isA("string").and.defaultsTo("//code goes here");
        this.hasA("url").which.isA("string");

        this.isBuiltWith("%url", function () {
            var that = this;
            if (this.url()) {
                $.getJSON(this.url(), function(result) {
                    if (!result.title || !result.source) {
                        throw new Error("invalid project object");
                    } else {
                        that.title(result.title);
                        that.source(result.source);
                    }
                });
            } else {
                that.title("default");
            }
        });
    });
    //////////////// PROJECT /////////////////////

    //////////////// IDE /////////////////////////
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

    var IDEView = new window.jermaine.View (function () {
        var messageTimer,
            messageTimeout = 5000,
            toggleEditorAndDirectory;

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
                    $("#IDE-title").click(function () {
                        that.toggleEditorAndDirectory();
                    });
                    //this is a hack to force Ace to update when the editor
                    //becomes visible again
                    if ($("#ide").is(":visible")) {
                        that.instance().editor().setValue(that.instance().editor().getValue());
                        that.instance().editor().gotoLine(0,0);
                    }
                    
                }
            });
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
                    var code = that.instance().project().source();
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

        this.respondsTo("addServerButtons", function () {
            var that = this;

            this.instance().buttons().add(new Button("save", "images/icons/save.png", function () {
                var saveURL;

                if (that.instance().changedFlag() === false) {
	            that.instance().messages().add("no changes need to be saved");
                } else {
                    that.instance().project().source(that.instance().editor().getSession().getValue());

                    saveURL = that.instance().project().url().match(/(.*).json/)[1] + "/save";
	            $.post(saveURL, { code: that.instance().project().source()},function(response)  {
	                that.instance().messages().add(response);
                        that.instance().changedFlag(false);
	            });
                }
            }));
        });


        this.initializesWith(function () {
            var that = this;

            //add run button
            this.instance().buttons().add(new Button("run", "images/icons/run.png", function () {
                that.instance().messages().add("running program");
                that.instance().project().source(that.instance().editor().getSession().getValue());
                return false;
            }));


            //set up the click responder on the title
            $("#IDE-title").click(function () {
                that.toggleEditorAndDirectory();
            });

            if ($("#ide").hasClass("server")) {
                this.addServerButtons();
            }
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
            $("#IDE-directory #" + this.instance().project().url().match(/\/(.*)\.json/)[1]).addClass("active").removeClass("inactive");
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
            var button = $($.parseHTML(newButton.view().render()));
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
                for (i = 0; i < result.length; ++i) {
                    result[i]["directory"] = "sketches";
                    result[i]["name"] = result[i]["url"].match(/(.*).json/)[1];
                }
                $("#IDE-directory").append(directoryTemplate({project:result}));

                $(".directory_listing").each(function (i, elt) {
                    $(elt).click(function () {
                        $("#"+instance.project().url().match(/\/(.*)\.json/)[1]).removeClass("active").addClass("inactive");
                        $(elt).addClass("active").removeClass("inactive");
                        instance.project(new Project($(elt).find("a").attr("href")));
                        //that.toggleEditorAndDirectory();
                        return false;
                    });
                });
                instance.project(new Project(result[0]["directory"] + "/" + result[0].url));
            });
        });
    });
    //////////////// IDE /////////////////////////

    window.IDE = IDE;
})(window);
