window.jermaine.util.namespace("window.ide.views", function (ns) {
    var ButtonView = new window.jermaine.View(function () {
        var buttonTemplate = Handlebars.compile($("#button-template").html());
        this.rendersWith(function (jsonRep) {
            return buttonTemplate(jsonRep);
        });
    });

    ns.ButtonView = ButtonView;
});
