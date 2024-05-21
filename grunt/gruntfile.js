module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    "path/to/result.css": "path/to/source.less"
                }
            }
        },
        jshint: {
            all: ['path/to/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['less', 'jshint']);
};
