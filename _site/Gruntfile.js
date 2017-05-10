module.exports = function(grunt) {

  var
    host = 0,
    devPath = 'dev',
    appPath = 'dev/app',
    assetPath = 'dev/assets',
    compiledPath = 'App';
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    dirs: {
      devPath: devPath,
      appPath: appPath,
      assetPath: assetPath,
      compiledPath: compiledPath,
      cordovaPath: cordovaPath
    },

    
    /*
     * Build notifications.
     */
    notify_hooks: {
      options: {
        enabled: true,
        success: true,
        duration: 2 
      }
    },
    
    notify: {
      js: {
        options: {
          title: 'Javascript',
          message: 'JShint, concat done!',
        }
      }
    },
    
    
    /*
     * Only used for static development.
     */
    watch: {
      
      js: {
        files: [
          'js/*.js',
          'js/*/*.js'
        ],
        tasks: [ 'concat:js_all' ],
      }
      
    },

    
    /*
     * concatenate assets
     */
    concat: {
      js_all: {
        files: {
          'assets/js/app.js': [
            'js/app.js',
            'js/*/*.module.js',
            'js/*/*.js'
          ]
        }
      }
    },

      
    // minify, obfuscate assets
    uglify: {
      
    }
    
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask('build', [
    'concat:js_all'
  ]);
  
};