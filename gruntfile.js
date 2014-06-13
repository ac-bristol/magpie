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
              imagesDir: '<%= meta.buildPath %>images',
              javascriptsDir: '<%= meta.buildPath %>scripts',    
              fontsDir: '<%= meta.buildPath %>fonts',
              outputStyle: 'expanded',
              sourcemap: true
            }
        },
        build: {
          options: {              
            sassDir: '<%= meta.srcPath %>scss',
            cssDir: '<%= meta.buildPath %>styles',
            imagesDir: '<%= meta.buildPath %>images',
            javascriptsDir: '<%= meta.buildPath %>scripts',    
            fontsDir: '<%= meta.buildPath %>fonts',
            outputStyle: 'compressed',
            environment: 'production'
          }
        },
      },

      // Concat
      concat: {
        options: {
            separator: ';',
        },
        app: {
          src: [
            '<%= meta.srcPath %>scripts/vendor/jquery.min.js',
            '<%= meta.srcPath %>scripts/vendor/respond.min.js',
            '<%= meta.srcPath %>scripts/application.min.js',
          ],
          dest: '<%= meta.buildPath %>scripts/<%= meta.projectNameSpace %>.js',
        },
        single: {
          files: {
            '<%= meta.buildPath %>scripts/head.min.js': ['<%= meta.srcPath %>scripts/vendor/head.min.js'],
          },
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
