window.jermaine.util.namespace("window.ide", function (ns) {
    var Button = ns.models.Button,
        Project = ns.models.Project,
        IDEView = ns.views.IDEView;

    //////////////// IDE MODEL /////////////////////////
    var IDE = new window.jermaine.Model (function () {
        this.hasAn("editor").which.isImmutable();
        this.hasA("directory").which.isA("string");

        this.hasA("project").which.validatesWith(function (project) {
            return project instanceof Project;
        });

        this.hasA("changedFlag").which.isA("boolean").and.defaultsTo(false);

        this.hasMany("messages").eachOfWhich.isA("string");
        this.hasMany("buttons").which.validateWith(function (button) {
            return button instanceof Button;
        });

        this.hasA("view");

        this.isBuiltWith("directory", function () {
            var that = this;

            //initialize editor as ace editor
            this.editor(ace.edit("IDE-editor"));
            this.editor().setTheme("ace/theme/eclipse");
            this.editor().getSession().setMode("ace/mode/java");
            this.editor().setHighlightActiveLine(false);
            this.editor().renderer.setShowPrintMargin(false);

            this.editor().getSession().on("change", function () {
                that.changedFlag(true);
            });

            this.view(new IDEView(this));
        });
    });
    //////////////// IDE MODEL /////////////////////////

    ns.models.IDE = IDE;
});
