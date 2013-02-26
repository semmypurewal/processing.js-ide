window.jermaine.util.namespace("window.ide.models", function (ns) {
    var Project = new window.jermaine.Model(function () {
        this.hasA("title").which.isA("string");
        this.hasA("source").which.isA("string").and.defaultsTo("//code goes here");
        this.hasA("url").which.isA("string");

        this.respondsTo("save", function (next) {
            var that = this,
                saveURL = this.url().match(/(.*).json/)[1] + "/save";

            $.post(saveURL, { code: this.source() } , function(response)  {
                next(response);
            });
        });


        this.isBuiltWith("%url", function () {
            var that = this;
            if (this.url()) {
                $.getJSON(this.url(), function(result) {
                    if (!result.title || !result.source) {
                        throw new Error("invalid project object");
                    } else {
                        that.title(result.title);
                        that.source(result.source);
                    }
                });
            } else {
                that.title("default");
            }
        });
    });

    ns.Project = Project;
});
