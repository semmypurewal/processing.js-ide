var main = function () {
    //set up ide model
    var ide = new window.ide.models.IDE();
    ide.directory("sketches.json");
};

$(document).ready(main);
