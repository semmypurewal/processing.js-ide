$(document).ready(function()  {
    var p;  //processing object

    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/eclipse");
    //document.getElementById('editor').style.fontSize='16px';
    
    var JavaMode = require("ace/mode/java").Mode;
    editor.getSession().setMode(new JavaMode());
    editor.setHighlightActiveLine(false);

    $("#run_button").fancybox({
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
	    var code = editor.getSession().getValue();
	    var canvas = document.getElementById("processing_canvas");
	    var error = null;

	    try  {
		p = new Processing(canvas, code);
	    }
	    catch(err)  {
		error = err;
		Processing.logger.log(err);
		parent.$.fancybox.cancel();
		p.exit();
	    }
	},
	'onComplete' : function()  {
	    $("#processing_canvas").focus();
	},
	'onCleanup' : function()  {
	    p.exit();
	}
    });
});