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
                    'bin/dark/theme.min.css': 'themes/obscene/dark/theme.scss',
                    'bin/light/theme.min.css': 'themes/obscene/light/theme.scss'
                }
            },
            ios: {
                options: {
                    style: "compressed"
                },
                files: {
                    'bin/ios/theme.min.css': 'themes/ios/theme.scss'
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
         copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'bin/',
                    src: ['**'],
                    dest: 'cdn/'
                }]
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['sass:obscene', 'sass:ios']);
    grunt.registerTask('obscene', ['sass:obscene']);
    grunt.registerTask('obscene', ['sass:ios']);
    grunt.registerTask('core', ['sass:core']);
    grunt.registerTask('build',['sass:obscene', 'sass:ios', 'copy'] )
};