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
    //set up ide model
    var ide = new window.IDE(new Project("sketches/hello.json"));
    ide.directory("sketches.json");

    //add buttons
    ide.buttons().add(new Button("run", "images/icons/run.png", function () {
        ide.messages().add("running program");
        ide.project().source(ide.editor().getSession().getValue());
        return false;
    }));

    var i;
    var titleDiv = $("#IDE-title");

    titleDiv.click(function () {
        if ($("#ide").is(":visible")) {
            $("#ide").flip({
                speed: 300,
                direction:"lr",
                color:"#fff",
                onBefore: function () {
                    $("#ide").hide();
                },
                onEnd: function () {
                    $("#IDE-directory").show();
                }
            });
        } else {
            $("#IDE-directory").flip({
                speed: 300,
                direction:"rl",
                color:"#fff",
                onBefore: function () {
                    $("#IDE-directory").hide();
                },
                onEnd: function () {
                    $("#ide").show();
                }
            });
        }
    });

    //RUN BUTTON CODE
    var p;  //processing object
    var error;  //processing error

    $("#IDE-run_button").colorbox({
        'title' : ide.project().title(),
        'inline' : true,
        'scrolling' : false,
        'href':"#canvas",
        'onLoad' : function()  {
            var width, height;
            var code = ide.project().source();
            var canvas = document.getElementById("processing_canvas");
            error = null;

            try  {
                p = new Processing(canvas, code);
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
    //END RUN BUTTON CODE
};

$(document).ready(main);