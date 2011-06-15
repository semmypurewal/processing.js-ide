$(document).ready(function()  {
    var p;  //processing object
    var i = new ide();
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