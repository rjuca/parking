/*global require*/

require.config({
	baseUrl: 'js',
    paths: {
		jquery: 'config',
		underscore: 'config'
		// backbone: 'config'
		// backbone: '../bower_components/backbone/backbone.min.js',
		// marionette: '../bower_components/backbone.marionette/backbone.marionette.min.js'
	},
	shim: {
		jquery: {
			deps: [],
			exports: 'jquery'
		},
		underscore: {
			deps: [],
			exports: '_'
		}
		// backbone: {
		// 	deps: [ 'jquery', '_' ],
		// 	exports: 'backbone'
		// }
	}
});

require(['app']);
/*global define*/
// require([
// 	'marionette'
// ], function (Marionette) {

// 	var MyRouter = Marionette.AppRouter.extend();

// 	return MyRouter;
// });