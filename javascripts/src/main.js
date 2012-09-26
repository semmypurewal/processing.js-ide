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

var main = function () {
    /* TEMPORARY MESSAGE STUFF TILL WE GET VIEWS WORKED OUT */
    var messageTimeout = 5000;
    var messageTimer;

    var message = function(message)  {
        var messageEl = messageDiv[0];
        if(messageTimer)  {
            clearTimeout(messageTimer);
        }
        messageEl.setAttribute("style", "display:none");
        messageEl.firstChild?messageEl.firstChild.data=message:messageEl.appendChild(document.createTextNode(message));
        
        messageShow(messageEl);
        messageTimer = setTimeout(function()  {
            messageHide(messageEl);
        }, messageTimeout);
    };

    var messageOptions = function(options)  {
        if(options.show)  {
            messageShow = options.show;
        }
        if(options.hide)  {
            messageHide = options.hide;
        }
        if(options.time)  {
            messageTimeout = options.time;
        }
    }

    messageOptions({
        show:function(div)  {
            $(div).fadeIn();
        }, 
        hide:function(div)  {
            $(div).fadeOut();
        },
        time: 3000
    });
    /* END TEMPORARY MESSAGE STUFF */

    //set up ide model
    var ide = new window.IDE();

    //create project
    var project = new window.Project("processing.js ide");

    //attach project to ide
    ide.project(project);

    //add buttons
    ide.buttons().add(new Button("run", "images/icons/run.png", function () {
        ide.messages().add("running program");
        project.source(ide.editor().getSession().getValue());
        message(ide.messages().at(ide.messages().size()-1));
        return false;
    }));





    //wire up project's event emitter to ide's event emitter
    project.on("change", function (data) {
        if (data.source !== undefined) {
            ide.editor().getSession().setValue(data.source);
        }
    });
    
    //add code to editor
    ide.editor().getSession().setValue(ide.project().source());

    $.get("examples/default.pjs", function (data) {
        project.source(data);
    });

    //set up views
    var buttonTemplate = Handlebars.compile($("#button-template").html());
    var titleDiv = $("#IDE-title");
    var buttonsDiv = $("#IDE-buttons");
    var messageDiv = $("#IDE-message");
    var i, button;

    titleDiv.text(project.title());

    var attachButtonView = function (b) {
        var button = $(buttonTemplate({ name:b.name(), img:b.imageURL() }));
        button.click(function () { b.handler()(); });
        $(buttonsDiv).append(button);
    }

    for (i = 0; i < ide.buttons().size(); i++) {
        attachButtonView(ide.buttons().at(i));
    }

    //RUN BUTTON CODE
    var p;  //processing object
    var error;  //processing error

    $("#IDE-run_button")[0].setAttribute("href","#canvas");

    $("#IDE-run_button").fancybox({
        'padding' : 0,
        'titleShow' : false,
        'type' : 'inline',
        'width' : 'auto',
        'height' : 'auto',
        'scrolling' : 'no',
        'hideOnOverlayClick' : 'true',
        'transitionIn' : 'elastic',
        'transitionOut' : 'elastic',
        'onStart' : function()  {
            var code = ide.project().source();
            var canvas = document.getElementById("processing_canvas");
            error = null;

            try  {
                p = new Processing(canvas, code);
                var dimensions = code.match(/\s+size\((\d+),(\d+)\)/);
                var width = parseInt(dimensions[1]);
                var height = parseInt(dimensions[2]);
                $("#processing_canvas").css('width',width);
                $("#processing_canvas").css('height',height);
            }
            catch(err)  {
                error = err;
                Processing.logger.log(err);
                $.fancybox.cancel();
                if(p)  {
                    p.exit();
                }
            }
        },
        'onComplete' : function()  {
            if(error)  {
                $.fancybox.close();
            } else  {
                $("#fancybox-content").css('height',$("#processing_canvas").css('height'));                                                                                 
                $("#fancybox-content").css('width',$("#processing_canvas").css('width'));
                $("#processing_canvas").focus();
            }
        },
        'onCleanup' : function()  {
            if(p)  {
                p.exit();
            }
        }
    });
    //END RUN BUTTON CODE
};

$(document).ready(function()  {
    main();
});