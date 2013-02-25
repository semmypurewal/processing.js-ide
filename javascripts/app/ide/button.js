window.jermaine.util.namespace("window.ide", function (ns) {
    var Button = new window.jermaine.Model(function () {
        this.hasA("name").which.isA("string");
        this.hasAn("imageURL").which.isA("string");
        this.hasA("handler").which.isA("function");

        this.hasA("view").which.validatesWith(function (v) {
            return v instanceof window.jermaine.BaseView;
        });

        this.isBuiltWith("name", "imageURL", "handler", function () {
            var that = this;
            this.view(new ButtonView(this));
        });
    });

    var ButtonView = new window.jermaine.View(function () {
        var buttonTemplate = Handlebars.compile($("#button-template").html());
        this.rendersWith(function (jsonRep) {
            return buttonTemplate(jsonRep);
        });
    });
    ns.Button = Button;
});
