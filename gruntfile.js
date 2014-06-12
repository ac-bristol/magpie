module.exports = function(grunt) {
 
    // Project configuration.
    grunt.initConfig({
 
      //Read the package.json (optional)
      pkg: grunt.file.readJSON('package.json'),

      // Metadata.
      meta: {
        srcPath: '_src/',
        buildPath: 'assets/',
      },


      // Task configuration.
      compass: {
        dev: {
            options: {              
              sassDir: '<%= meta.srcPath %>scss',
              cssDir: '<%= meta.buildPath %>styles',
              environment: 'development',
              sourcemap: true
            }
        },
      },

     // uglify: {
     //    options: {
     //      mangle: false
     //    },
     //    my_target: {
     //      files: {
     //        '<%= meta.buildPath %>modernizr.js': '<%= meta.srcPath %>javascripts/modernizr.js'
     //      }
     //    }
     //  },

      
     
      watch: {
        compass: {
          files: ['<%= meta.srcPath %>scss/**/*.scss'],
          tasks: ['compass:dev']
        },
        // javascripts: {
        //   files: ['<%= meta.srcPath %>assets/scripts/**/*.js'],
        //   tasks: ['uglify']
        // },
      }
 
    });
 
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Default task.
    grunt.registerTask('default', ['compass:dev']);

    // Build Task
    grunt.registerTask('build', ['sass:build']);

};
