module.exports = function( grunt ) {
  // Load the plugins
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-concat' );
  grunt.loadNpmTasks( 'grunt-contrib-requirejs' );

  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '../server/public/js/app.js',
        dest: '../server/public/js/app.min.js'
      }
    },
    jshint: {
      all: [ 'Gruntfile.js', 'app/**/*.js' ]
    },
    concat: {
      config: {
        src: [
          'bower_components/requirejs/require.js',
          'bower_components/jquery/dist/jquery.js',
          'bower_components/jquery/dist/underscore.js'
          // 'bower_components/backbone/backbone.js',
          // 'bower_components/backbone.marionette/lib/backbone.marionette.js'
        ],
        dest: '../server/public/js/config.js'
      },
      js: {
        src: [
          // 'bower_components/backbone/backbone.js',
          'app/**/*.js'
        ],
        dest: '../server/public/js/app.js'
      },
      css: {
        src: [ 'bower_components/Materialize/dist/css/materialize.min.css', 'app/**/*.css' ],
        dest: '../server/public/css/app.css'
      }
    }
  });

  // Default task(s).
  grunt.registerTask( 'default', [ 'concat' ] );
};