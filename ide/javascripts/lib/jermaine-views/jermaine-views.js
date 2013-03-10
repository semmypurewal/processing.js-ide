(function (window) {
    ////////////// WILL EVENTUALLY BE MOVED TO JERMAINE //////////////////
    window.jermaine.BaseView = new window.jermaine.Model(function () {
        var watchers = {};

        this.hasAn("instance");
        this.hasA("renderer").which.isA("function");

        this.respondsTo("render", function () {
            return this.renderer()(this.instance().toJSON());
        });

        this.respondsTo("watches", function (attribute, responder) {
            watchers[attribute] = responder;
        });

        this.respondsTo("rendersWith", function (r) {
            this.renderer(r);
        });

        this.isBuiltWith("instance", "%renderer", function () {
            var that = this,
                key;

            //it's possible this is called with an empty constructor,
            //so instance could be undefined
            if (this.instance() !== undefined) {
                this.instance().on("change", function(data) {
                    var i;

                    //reset key
                    key = "";

                    for (i = data.length-1; i >= 0; i--) {
                        key += data[i].key;
                        if (i !== 0) {
                            key += ".";
                        }
                    }

                    if (watchers[key] !== undefined) {
                        //do something with the new value

                        //note we sent in 'that' because in the view, this
                        //should point to the view itself, not the model
                        watchers[key].call(that, data[0].value);
                    }
                });
            }
        });
    });
    ////////////// END WILL EVENTUALLY BE MOVED TO JERMAINE //////////////////

    window.jermaine.View = function (specification) {
        var watchers = {},
            renderer = null,
            initializer = null,
            view,
            ResultView;

        ResultView = new window.jermaine.Model (function () {
            var that = this;

            this.isA(window.jermaine.BaseView);

            this.isBuiltWith("instance", function () {
                var key;

                that.parent.apply(this, [this.instance()]);

                for (key in watchers) {
                    this.watches(key, watchers[key]);
                }

                if (renderer !== null) {
                    this.renderer(renderer);
                }

                if (initializer !== null) {
                    initializer.call(this);
                }
            });
        });

        ResultView.rendersWith = function (r) {
            renderer = r;
        };

        ResultView.watches = function (a, r) {
            watchers[a] = r;
        };

        ResultView.initializesWith = function (init) {
            initializer = init;
        };

        specification.call(ResultView);

        return ResultView;
    };

}(window));
