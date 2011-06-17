(function (window)  {
    function ide(divName, options)  {
	var divName = divName || "ide";
	var ideDiv = window.document.getElementById(divName);
	var buttonsDiv = window.document.createElement("div");
	buttonsDiv.setAttribute("id", "buttons");
	var editorDiv = window.document.createElement("div");
	editorDiv.setAttribute("id", "editor");
	ideDiv.appendChild(buttonsDiv);
	ideDiv.appendChild(editorDiv);
	
	var editor = ace.edit("editor");
	editor.setTheme("ace/theme/eclipse");

	var JavaMode = require("ace/mode/java").Mode;
	editor.getSession().setMode(new JavaMode());
	editor.setHighlightActiveLine(false);

	//code getter/setter, no argument gets code, argument sets code
	ide.prototype.code = function(code)  {
	    if(!code)  {
		return editor.getSession().getValue();
	    }
	    else  {
		editor.getSession().setValue(code);
	    }
	}

	ide.prototype.onChange = function(fn)  {
	    editor.getSession().on('change', fn);
	}

	// button getter/adder
	// if img and fn are defined, adds a button to the ide
	// else returns the a element associated with the button
	ide.prototype.button = function(name, img, fn)  {
	    if(img && fn)  {
		var buttonImg = window.document.createElement("img");
		buttonImg.setAttribute("class", "button");
		buttonImg.setAttribute("src",img);
		var buttonA = window.document.createElement("a");
		buttonA.setAttribute("id", name+"_button");
		buttonA.appendChild(buttonImg);
		buttonsDiv.appendChild(buttonA);
		buttonA.onclick = function() { fn(); };
	    }
	    else  {
		return window.document.getElementById(name+"_button");;
	    }
	}

    }
	
    window.ide = ide;
})(window);