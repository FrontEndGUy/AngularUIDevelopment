module.exports = function (grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
          options: {
              seperator:";"
          },
          dist: {
              src: ['src/bower/jquery/dist/jquery.js',
                    'src/bower/angular/angular.js',
                    'src/js/vendor/ui-utils.js',
                    'src/js/vendor/bootstrap.js',
                    'src/js/app.js',
                    'src/js/controllers.js',
                    'src/js/directives.js'],
              dest: 'dist/js/<%= pkg.name %>.js'
          }
      },
      copy: {
          main: {
              files: [{
                  expand: true,
                  cwd: 'src/css',
                  src: ['**'],
                  dest: 'dist/css/'
              }]
          }
      },
      targethtml: {
          dist: {
              files: {
                  'dist/index.html' : 'src/index.html'
              }
          }
      },
      karma: {
          unit: {
              configFile: 'conf/karma.conf.js',
              singleRun: true
          }
      },
      protractor: {
          e2e: {
              options: {
                  configFile: 'conf/protractor.conf.js'
              }
          }
      }
  });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-targethtml');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.registerTask('dist', ['karma', 'protractor', 'concat', 'targethtml', 'copy']);
};