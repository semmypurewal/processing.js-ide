window.jermaine.util.namespace("window.ide.models", function (ns) {
    var Button = new window.jermaine.Model(function () {
        this.hasA("name").which.isA("string");
        this.hasAn("imageURL").which.isA("string");
        this.hasA("handler").which.isA("function");

        this.hasA("view").which.validatesWith(function (v) {
            return v instanceof window.ide.views.ButtonView;
        });

        this.isBuiltWith("name", "imageURL", "handler", function () {
            var that = this;
            this.view(new window.ide.views.ButtonView(this));
        });
    });

    ns.Button = Button;
});
