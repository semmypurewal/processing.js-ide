window.jermaine.util.namespace("window.ide", function (ns) {
    var Button = ns.models.Button;
    var DirectoryView = ns.views.DirectoryView;

    var IDEView = new window.jermaine.View (function () {
        var messageTimer,
            messageTimeout = 5000;

        this.hasA("directoryView").which.validatesWith(function (v) {
            return v instanceof DirectoryView;
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
                    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
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
            this.directoryView(new DirectoryView(newDirectory, this));
        });
    });

    ns.views.IDEView = IDEView;
});