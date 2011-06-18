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

$(document).ready(function()  {
    var p;  //processing object
    var i = new ide();

    i.title("processing.js project");

    i.code('// comments go here\n'+

'void setup()\n'+
'{\n'+
'    size(200,200);\n'+
'    background(125);\n'+
'    fill(255);\n'+
'    noLoop();\n'+
'    PFont fontA = loadFont("courier");\n'+
'    textFont(fontA, 14);\n'+
'}\n\n'+
'void draw(){\n'+
'    text("Hello Web!",20,20);\n'+
'    println("Hello ErrorLog!");\n'+
'}');

    i.button("run","icons/run.png", function()  {
	return false;
    });

    i.button("save", "icons/save.png", function()  {
	i.message("save button pressed.");
	return false;
    });

    i.button("attach", "icons/attach.png", function()  {
	i.message("attach button pressed.");
	return false;
    });

    i.messageOptions({
	show:function(div)  {
	    $(div).fadeIn();
	}, 
	hide:function(div)  {
	    $(div).fadeOut();
	},
	time: 3000
    });


    i.button("save").setAttribute("href","#");
    i.button("attach").setAttribute("href","#");
    i.button("run").setAttribute("href","#canvas");

    $(i.button("run")).fancybox({
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
	    var code = i.code();
	    var canvas = document.getElementById("processing_canvas");
	    var error = null;

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
		parent.$.fancybox.cancel();
		if(p)  {
		    p.exit();
		}
	    }
	},
	'onComplete' : function()  {
            $("#fancybox-content").css('height',$("#processing_canvas").css('height'));                                                                                 
            $("#fancybox-content").css('width',$("#processing_canvas").css('width'));
	    $("#processing_canvas").focus();
	},
	'onCleanup' : function()  {
	    if(p)  {
		p.exit();
	    }
	}
    });
});