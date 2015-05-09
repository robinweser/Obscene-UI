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
            obsceneLight: {
                options: {
                    style: "compressed"
                },
                files: {
                    'bin/obscene-light.min.css': 'themes/obscene-light/theme.scss'
                }
            },
            obsceneDark : {
                options: {
                    style: "compressed"
                },
                files: {
                    'bin/obscene-dark.min.css': 'themes/obscene-dark/theme.scss'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass:obsceneLight']);
    grunt.registerTask('obscene-light', ['sass:obsceneLight']);
    grunt.registerTask('obscene-dark', ['sass:obsceneDark']);
    grunt.registerTask('core', ['sass:core']);
};