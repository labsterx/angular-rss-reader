'use strict';

module.exports = function(config) {

	config.set({

		// base path used to resolve all patterns (e.g. files, exclude)
		basePath: '',

		// frameworks to use
		frameworks: ['mocha', 'sinon-chai'],

		// list of files / patterns to load in the browser
		files: [
			// 'bower_components/angular/angular.js',
			// 'bower_components/angular-mocks/angular-mocks.js',
			// 'src/**/*.spec.js'
			// 'test/*.mocha.js'
		],

		// list of files to exclude
		exclude: [],

		// preprocess matching files before serving them to the browser
		preprocessors: {
			// 'src/**/*.js': ['coverage']
		},

		coverageReporter: {
			type: 'text-summary',
			dir: 'coverage/'
		},

		// test results reporter to use
		// reporters: ['progress', 'coverage'],
		reporters: ['spec'],

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests on file changes
		autoWatch: false,

		// start these browsers
		browsers: ['Chrome'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true

	});
};
