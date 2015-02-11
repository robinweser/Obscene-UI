module.exports = function (grunt) {
    grunt.initConfig({
        pkg: '<json:package.json>',
        sass: {
            dist: {
                options: {
                    style: "compressed"
                },
                files: {
                    'bin/obscene.css': 'sass/main.scss'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass']);
};