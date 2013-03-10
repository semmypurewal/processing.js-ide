module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'ide/javascripts/app/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');


    grunt.registerTask('default', ['jshint']);
  };
