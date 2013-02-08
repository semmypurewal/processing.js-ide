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
    var View = new window.jermaine.Model(function () {
        var watchers = {};

        this.hasAn("instance");
        this.hasAn("id").which.isA("string");
        this.hasA("renderer").which.isA("function");
        this.respondsTo("render", function () {
            return this.renderer()(this.instance().toJSON());
        });

        this.respondsTo("watch", function (attribute, responder) {
            console.log("caching watcher for " + attribute);
            watchers[attribute] = responder;
        });


        this.isBuiltWith("instance", function () {
            console.log("hey from parent constructor");
            if (this.instance() !== undefined) {
                this.instance().on("change", function(data) {
                    if (watchers[data[0].key] !== undefined) {
                        //do something with the new value
                        watchers[data[0].key](data[0].value);
                    }
                });
            }


            this.on("change", function (data) {
                console.log("this has changed: " + data[0].key);
                if (data[0].key === "instance") {
                    this.instance().on("change", function(data) {
                        console.log("instance has changed");
                        if (watchers[data[0].key] !== undefined) {
                            //do something with the new value
                            //watchers[data[data.length-1].key](data[data.length-1].value);
                        }
                    });
                }
            });
        });
    });

    var IDEView = new window.jermaine.Model (function () {
        var that = this;

        var messageTimer,
            messageTimeout = 5000;
        

        this.isA(View);

        this.isBuiltWith("instance", function () {
            console.log("hey from child constructor");
            that.parent.apply(this, [this.instance()]);

            this.watch("messages", function () {
                if (messageTimer !== null) {
                    clearTimeout(messageTimer);
                }
            
                $("#IDE-message").css("display", "none");
                $("#IDE-message").text(data[0].value);
                $("#IDE-message").fadeIn();
                
                messageTimer = setTimeout(function()  {
                    $("#IDE-message").fadeOut();
                }, messageTimeout);
            });
        });
    });


    var buttonTemplate = Handlebars.compile($("#button-template").html());

    /*var ButtonView = new window.jermaine.View(function () {
        this.rendersWith(function (json) {
            return buttonTemplate(json);
        });
    });*/


    var ButtonView = new window.jermaine.Model(function () {
        this.isA(View);

        this.isBuiltWith("instance", function () {
            this.renderer(function (jsonRep) {
                return buttonTemplate(jsonRep);
            });
        });
    });

    var Button = new window.jermaine.Model(function () {
        this.hasA("name").which.isA("string");
        this.hasAn("imageURL").which.isA("string");
        this.hasA("handler").which.isA("function");

        this.hasA("view").which.validatesWith(function (v) {
            return v instanceof View;
        });

        this.isBuiltWith("name", "imageURL", "handler", function () {
            var that = this;
            this.view(new ButtonView(this));

            /*this.view(new View(function (jsonRep) {
                return buttonTemplate(jsonRep);
            }, this));*/
        });
    });


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

        this.hasA("view");

        this.isBuiltWith("%project", function () {
            console.log("creating IDE");

            //create new java mode
            var javaMode = require("ace/mode/java").Mode;
            
            //initialize editor as ace editor
            this.editor(ace.edit("IDE-editor"));
            this.editor().setTheme("ace/theme/eclipse");
            this.editor().getSession().setMode(new javaMode());
            this.editor().setHighlightActiveLine(false);
            this.editor().renderer.setShowPrintMargin(false);

            if (this.project() !== undefined) {
                this.editor().getSession().setValue(this.project().source());
            }
            
            this.view(new IDEView(this));

            //should eventually be handled by the view?!?!
            this.on("change", function (data) {


                var that = this,
                    i,
                    messageTimer, 
                    messageTimeout = 5000;
                

                if (data[0] && data[0].key === "directory") {
                    $.getJSON(this.directory(), function (result) {
                        var directoryTemplate = Handlebars.compile($("#directory-template").html());
                        for (i = 0; i < result.length; ++i) {
                            result[i]["directory"] = that.directory().match(/(.*)\/[A-Za-z0-9]*.json/)[1];
                        }
                        $("#IDE-directory").append(directoryTemplate({project:result}));

                        $(".directory_listing").each(function (i, elt) {
                            $(elt).click(function () {
                                that.project(new Project($(elt).attr("href")));
                                $("#IDE-directory").toggle();
                                return false;
                            });
                        });
                    });
                }
                if (data[1] && data[1].key === "project" && data[0].key === "source") {
                    this.editor().getSession().setValue(data[0].value);
                }
                if (data[1] && data[1].key === "project" && data[0].key === "title") {
                    $("#IDE-title").text(this.project().title());
                }

                if (data[0] && data[0].key === "buttons" && data[0].action === "add") {
                    var button = $(data[0].value.view().render());

                    button.click(function () {
                        data[0].value.handler()();
                    });
                    $("#IDE-buttons").append(button);
                }

                if (data[0] && data[0].key === "messages" && data[0].action === "add") {
                    console.log(data[0].value);

                    /*if (messageTimer !== null) {
                        clearTimeout(messageTimer);
                    }

                    $("#IDE-message").css("display", "none");
                    $("#IDE-message").text(data[0].value);
                    $("#IDE-message").fadeIn();
                    
                    messageTimer = setTimeout(function()  {
                        $("#IDE-message").fadeOut();
                    }, messageTimeout);*/
                }
            });

        });
    });


    window.IDE = IDE;
    window.Project = Project;
    window.Button = Button;
})(window);
