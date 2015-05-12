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
                    'bin/dark/obscene.min.css': 'themes/obscene/dark/theme.scss',
                    'bin/light/obscene.min.css': 'themes/obscene/light/theme.scss'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass:obscene']);
    grunt.registerTask('obscene', ['sass:obscene']);
    grunt.registerTask('core', ['sass:core']);
};