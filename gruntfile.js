module.exports = function(grunt) {
 
    // Project configuration.
    grunt.initConfig({
 
      //Read the package.json (optional)
      pkg: grunt.file.readJSON('package.json'),

      // Metadata.
      meta: {
        srcPath: '_src/',
        buildPath: 'assets/',
        projectName: 'Project Name',
        projectNameSpace: 'project-name',
      },

      // Task configuration:

      // Compass
      compass: {
        dev: {
            options: {              
              sassDir: '<%= meta.srcPath %>scss',
              cssDir: '<%= meta.buildPath %>styles',
              environment: 'development',
              sourcemap: true
            }
        },
        build: {
          options: {              
            sassDir: '<%= meta.srcPath %>scss',
            cssDir: '<%= meta.buildPath %>styles',
            environment: 'production',
            sourcemap: true
          }
        },
      },

      // Concat
      concat: {
        options: {
            separator: ';',
        },
        dev: {
          src: [
            '<%= meta.srcPath %>scripts/vendor/jquery.min.js',
            '<%= meta.srcPath %>scripts/vendor/respond.min.js',
            '<%= meta.srcPath %>scripts/application.min.js',
          ],
          dest: '<%= meta.buildPath %>/scripts/<%= meta.projectNameSpace %>.js',
        },
      },

     
     // Watch
      watch: {
        compass: {
          files: ['<%= meta.srcPath %>scss/**/*.scss'],
          tasks: ['compass:dev']
        },
        javascripts: {
          files: ['<%= meta.srcPath %>scripts/**/*.js'],
          tasks: ['concat:dev']
        },
      }
 
    });
 
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task.
    grunt.registerTask('default', ['compass:dev']);

    // Build Task
    grunt.registerTask('build', ['compass:build']);

};
