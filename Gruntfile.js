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
        },
        watch: {
            theme: {
                files: '**/*.scss',
                tasks: ['default'],
                options: {
                    debounceDelay: 500,
                },
            },
        },
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass:obscene']);
    grunt.registerTask('obscene', ['sass:obscene']);
    grunt.registerTask('core', ['sass:core']);
};