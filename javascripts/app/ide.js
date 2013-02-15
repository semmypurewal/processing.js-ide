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
    var EditSession = require("ace/edit_session").EditSession;

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

    //////////////// SOURCE FILE ///////////////
    var SourceFile = new window.jermaine.Model(function () {
        this.hasA("name").which.isA("string");
        this.hasA("source").which.isA("string");
        this.isBuiltWith("name", "source");
        
    });

    //////////////// SOURCE FILE ///////////////


    //////////////// PROJECT /////////////////////
    var Project = new window.jermaine.Model(function () {
        this.hasA("title").which.isA("string");
        this.hasA("url").which.isA("string");

        this.hasMany("sources").eachOfWhich.validatesWith(function (file) {
            return file instanceof SourceFile;
        });

        this.isBuiltWith("%url", function () {
            var that = this,
                i;
            if (this.url()) {
                $.getJSON(this.url(), function(result) {
                    if (!result.title || !result.sources) {
                        throw new Error("invalid project object");
                    } else {
                        that.title(result.title);
                        for (i = 0; i < result.sources.length; ++i) {
                            that.sources().add(new SourceFile(result.sources[i].name, result.sources[i].source));
                        }
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
        this.hasMany("projects");

        this.hasA("project").which.validatesWith(function (project) {
            return project instanceof Project;
        });

        this.hasMany("messages").eachOfWhich.isA("string");
        this.hasMany("buttons").which.validateWith(function (button) {
            return button instanceof Button;
        });

        this.hasMany("editSessions").eachOfWhich.validatesWith(function (es) {
            return es instanceof EditSession;
        });

        this.hasA("view");

        this.isBuiltWith("directory", function () {
            //create new java mode
            var javaMode = require("ace/mode/java").Mode;
            
            //initialize editor as ace editor
            this.editor(ace.edit("IDE-editor"));
            this.editor().setTheme("ace/theme/eclipse");
            this.editor().getSession().setMode(new javaMode());
            this.editor().setHighlightActiveLine(false);
            this.editor().renderer.setShowPrintMargin(false);

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
                },
                onEnd: function () {
                    elementB.show();
                    
                    //this is a hack to force Ace to update when the editor
                    //becomes visible again
                    if ($("#ide").is(":visible")) {
                        that.instance().editor().setValue(that.instance().editor().getValue());
                        that.instance().editor().gotoLine(0,0);
                    }
                    
                }
            });
        });

        this.respondsTo("setTab", function (tab) {
            //remove the active class
            $("#IDE-tabs > .active").removeClass("active");
            $($("#IDE-tabs > .IDE-tab")[tab]).addClass("active");
            this.instance().editor().setSession(this.instance().editSessions().at(tab));
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
                    var width, height, i;
                    var code = "";
                    //var code = that.instance().project().source();
                    for (i = 0; i < that.instance().project().sources().size(); i++) {
                        code += that.instance().project().sources().at(i).source();
                    }
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

        this.initializesWith(function () {
            var that = this;

            //add run button
            this.instance().buttons().add(new Button("run", "images/icons/run.png", function () {
                that.instance().messages().add("running program");
                return false;
            }));

            //set up the click responder on the title
            $("#IDE-title").click(function () {
                that.toggleEditorAndDirectory();
            });            
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
            $("#IDE-directory #" + this.instance().project().url().match(/\/(.*)\.json/)[1]).addClass("active");

            //clear out tabs so that they can be readded
            $("#IDE-tabs").html("");
            this.setUpProcessingRunner();
        });

        this.watches("project.title", function (newTitle) {
            var i,
                count = this.instance().editSessions().size();

            $("#IDE-title").text(newTitle);

            for (i = 0; i < count; i++) {
                this.instance().editSessions().pop();
            }
        });
        
        /**
         * When a source file gets added to a project, we
         * have to add a tab
         */
        this.watches("project.sources", function (newSource) {
            var tab,
                session,
                index = this.instance().editSessions().size(),
                that = this;
            session = new EditSession(newSource.source());
            tab = $("<span class='IDE-tab'>"+newSource.name()+"</span>");
            this.instance().editSessions().add(session);
            $("#IDE-tabs").append(tab);
            tab.click(function () {
                that.setTab(index);
            });
            that.setTab(0);
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
                        $("#"+instance.project().url().match(/\/(.*)\.json/)[1]).removeClass("active");
                        $(elt).addClass("active");
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
