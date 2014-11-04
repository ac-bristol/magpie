module.exports = function(grunt) {

  // JS files to be concatenated
  var jsList = [
    '<%= meta.srcPath %>scripts/vendor/jquery.min.js',
    '<%= meta.srcPath %>scripts/vendor/respond.min.js',
    '<%= meta.srcPath %>scripts/application.js'
  ];

  // Var for imagemin
  var mozjpeg = require('imagemin-mozjpeg');

  // Vars for Tasks
  var autoprefixer = require('autoprefixer-core');

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);
 
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

    // Sass: dev & build 
    sass: {
      dev: {
        options: {
          style: 'expanded',
          sourcemap: true
        },
        files: {                         
          '<%= meta.buildPath %>styles/<%= meta.projectNameSpace %>.css': '<%= meta.srcPath %>scss/<%= meta.projectNameSpace %>.scss'
        }
      },
      build: {
        options: {
          style: 'compressed'
        },
        files: {                         
          '<%= meta.buildPath %>styles/<%= meta.projectNameSpace %>.css': '<%= meta.srcPath %>scss/<%= meta.projectNameSpace %>.scss'
        }
      }
    },

    // Concat: concatinates jsList
    concat: {
      options: {
        separator: ' ',
        stripBanners: true,
        banner: '/*! <%= meta.projectName %> - <%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      dev: {
        src: [jsList],
        dest: '<%= meta.buildPath %>scripts/application.js',
      },
      build: {
        src: [jsList],
        dest: '<%= meta.buildPath %>scripts/application.min.js',
      }
    },

    // Copy: copies imgs,fonts,vids other to assets folder
    copy: {
      images: {
        files: [
          {expand: true, flatten: true, src: ['<%= meta.srcPath %>images/**',  '!<%= meta.srcPath %>images/**/*.psd'], dest: '<%= meta.buildPath %>images/', filter: 'isFile'}
        ]
      },
      fonts: {
        files: [
          {expand: true, flatten: true, src: ['<%= meta.srcPath %>fonts/**'], dest: '<%= meta.buildPath %>fonts/', filter: 'isFile'}
        ]
      },
      videos: {
        files: [
          {expand: true, flatten: true, src: ['<%= meta.srcPath %>videos/**'], dest: '<%= meta.buildPath %>videos/', filter: 'isFile'}
        ]
      },
    },

    // Imagemin: compresses images
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: '<%= meta.buildPath %>images',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= meta.buildPath %>images'
        }]
      }
    },

    // SVG min
    svgmin: { //minimize SVG files
      options: {
        plugins: [
          { removeViewBox: false },
          { removeUselessStrokeAndFill: false }
        ]
      },
      dist: {
        expand: true,
        cwd: '<%= meta.buildPath %>images/',
        src: ['*.svg'],
        dest: '<%= meta.buildPath %>images/'
      }
    },

    // Uglify 
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          '<%= meta.buildPath %>scripts/application.min.js': '<%= meta.buildPath %>scripts/application.min.js',
        }
      }
    },

    // CSS min
    cssmin: {
      minify: {
        options: {
        },
        files: {
          '<%= meta.buildPath %>styles/<%= meta.projectNameSpace %>.css': '<%= meta.buildPath %>styles/<%= meta.projectNameSpace %>.css'
          }
      }
    },
   
    // Watch: watches styles, js and copy task
    watch: {
      sass: {
        files: ['<%= meta.srcPath %>scss/**/*.scss'],
        tasks: ['sass:dev']
      },
      javascripts: {
        files: ['<%= meta.srcPath %>scripts/**/*.js'],
        tasks: ['concat']
      },
      images: {
        files: ['<%= meta.srcPath %>images/**/*.jpg','<%= meta.srcPath %>/images/**/*.png','<%= meta.srcPath %>/images/**/*.gif','<%= meta.srcPath %>/images/**/*.svg'],
        tasks: ['copy:images']
      },
      fonts: {
        files: ['<%= meta.srcPath %>fonts/**/*.*'],
        tasks: ['copy:fonts']
      },
      videos: {
        files: ['<%= meta.srcPath %>videos/**/*.*'],
        tasks: ['copy:videos']
      },
    },

    // Clean
    clean: ["<%= meta.buildPath %>"]

  });

  // Default task.
  grunt.registerTask('default', ['sass:dev', 'copy', 'concat:dev']);

  // Build Task
  grunt.registerTask('build', ['clean', 'sass:build','copy', 'concat:build', 'imagemin', 'uglify', 'cssmin', 'svgmin']);

};
