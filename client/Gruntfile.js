module.exports = function( grunt ) {
  // Load the plugins
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-concat' );

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
      js: {
        src: [
          'bower_components/requirejs/require.js',
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
  grunt.registerTask( 'default', [ 'jshint', 'concat', 'uglify' ] );
};