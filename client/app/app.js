/*global require*/

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		underscore: {
			exports: '_'
		},
		marionette: {
			deps: [ 'backbone' ],
			exports: 'Marionette'
		}
	},
	paths: {
		jquery: '../bower_components/jquery/dist/jquery.min',
		underscore: '../bower_components/underscore/underscore.min',
		backbone: '../bower_components/backbone/backbone.min',
		marionette: '../bower_components/backbone.marionette/backbone.marionette.min',
		app: './app'
	}
});

require([
	'backbone',
	'routers/router'
], function (Backbone, Workspace) {

	/*jshint nonew:false*/
	// Initialize routing and start Backbone.history()
	new Workspace();
	Backbone.history.start();
});