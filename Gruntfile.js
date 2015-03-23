module.exports = function (grunt) {
    grunt.initConfig({
        pkg: '<json:package.json>',
        sass: {
            core: {
                options: {
                    style: "compressed"
                },
                files: {
                    'bin/core.min.css': 'core/core.scss'
                }
            },
            obscene: {
                options: {
                    style: "compressed"
                },
                files: {
                    'bin/obscene.min.css': 'themes/obscene/obscene.scss'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass:obscene']);
    grunt.registerTask('obscene', ['sass:obscene']);
    grunt.registerTask('core', ['sass:core']);
};