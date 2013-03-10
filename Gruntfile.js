module.exports = function (grunt) {
    var sources, libraries;
    
    sources = [
        "models/project.js",
        "views/button.js",
        "models/button.js",
        "views/directory.js",
        "views/ide.js",
        "models/ide.js",
        "app.js"
    ];
    
    libraries = [
        "ace-builds/src-min/ace.js",
        "ace-builds/src-min/theme-eclipse.js",
        "ace-builds/src-min/mode-java.js",
        "colorbox/jquery.colorbox.js",
        "processing/processing-1.4.1.min.js",
        "handlebars/handlebars-1.0.rc.1.js",
        "jermaine/build/jermaine.js",
        "jermaine-views/jermaine-views.js"
    ];


    grunt.initConfig({
        jshint: {
            all: ["Gruntfile.js", "ide/javascripts/app/**/*.js"]
        },
        
        concat: {
            options: {
                separator: ";"
            },
            library: {
                src: libraries.map(function (lib) {
                    return "ide/javascripts/lib/" + lib;
                }),
                dest: "ide/javascripts/build/lib.js"
            },
            source: {
                src: sources.map(function (src) {
                    return "ide/javascripts/app/" + src;
                }),
                dest: "ide/javascripts/build/app.js"
            },
            all: {
                src: ["ide/javascripts/build/lib.js",
                      "ide/javascripts/build/app.js"],
                dest: "ide/javascripts/build/ide.js"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-concat");
    
    grunt.registerTask("default", ["jshint", "concat"]);
};
