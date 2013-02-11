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
    ////////////// WILL EVENTUALLY BE MOVED TO JERMAINE //////////////////
    var View = new window.jermaine.Model(function () {
        var watchers = {};

        this.hasAn("instance");
        this.hasA("renderer").which.isA("function");

        this.respondsTo("render", function () {
            return this.renderer()(this.instance().toJSON());
        });

        this.respondsTo("watch", function (attribute, responder) {
            watchers[attribute] = responder;
        });

        this.isBuiltWith("instance", "%renderer", function () {
            var that = this;

            //it's possible this is called with an empty constructor,
            //so instance could be undefined
            if (this.instance() !== undefined) {
                this.instance().on("change", function(data) {
                    var i;
                    var key = "";
                    for (i = data.length-1; i >= 0; i--) {
                        key += data[i].key;
                        if (i !== 0) {
                            key += ".";
                        }
                    }

                    if (watchers[key] !== undefined) {
                        //do something with the new value

                        //note we sent in 'that' because in the view, this
                        //should point to the view itself, not the model
                        watchers[key].call(that, data[0].value);
                    }
                });
            }
        });
    });
    ////////////// END WILL EVENTUALLY BE MOVED TO JERMAINE //////////////////



    //////////////// BUTTON /////////////////////
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
        });
    });

    var ButtonView = new window.jermaine.Model(function () {
        var that = this;
        this.isA(View);

        var buttonTemplate = Handlebars.compile($("#button-template").html());

        this.isBuiltWith("instance", function () {
            that.parent.apply(this, [this.instance(), function (jsonRep) {
                return buttonTemplate(jsonRep) }]);
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
        });
    });

    var ViewWrapper = function (specification) {
        var watchers = {},
            modified = false,
            renderer = null;

        this.rendersWith = function (r) {
            renderer = r;
        };

        this.watches = function (attribute, responder) {
            watchers[attribute] = responder;
        };

        var ResultView = new window.jermaine.Model (function () {
            var that = this;

            this.isA(View);

            this.isBuiltWith("instance", function () {
                var key;

                that.parent.apply(this, [this.instance()]);

                for (key in watchers) {
                    this.watch(key, watchers[key]);
                };

                if (renderer !== null) {
                    this.rendersWith(renderer);
                }
            });
        });

        return ResultView;
    };

    var IDEView = new window.jermaine.Model (function () {
        var that = this;

        var messageTimer,
            messageTimeout = 5000;
        
        this.isA(View);

        this.isBuiltWith("instance", function () {
            //call parent constructor
            that.parent.apply(this, [this.instance()]);

            this.watch("messages", function (newMessage) {
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

            this.watch("project.title", function (newTitle) {
                $("#IDE-title").text(newTitle);
            });

            this.watch("project.source", function (newSource) {
                this.instance().editor().getSession().setValue(newSource);
            });

            this.watch("buttons", function (newButton) {
                var button = $(newButton.view().render());
                //add click function
                button.click(function () {
                    newButton.handler()();
                });
                $("#IDE-buttons").append(button);
            });

            this.watch("directory", function (newDirectory) {
                var instance = this.instance();
                $.getJSON(newDirectory, function (result) {
                    var directoryTemplate = Handlebars.compile($("#directory-template").html());
                    for (i = 0; i < result.length; ++i) {
                        result[i]["directory"] = newDirectory.match(/(.*)\/[A-Za-z0-9]*.json/)[1];
                    }
                    $("#IDE-directory").append(directoryTemplate({project:result}));
                    
                    $(".directory_listing").each(function (i, elt) {
                        console.log($(elt).attr("href"));
                        $(elt).click(function () {
                            instance.project(new Project($(elt).attr("href")));
                            $("#IDE-directory").toggle();
                            return false;
                        });
                    });
                });
            });
        });
    });
    //////////////// IDE /////////////////////////


    window.IDE = IDE;
    window.Project = Project;
    window.Button = Button;
})(window);
