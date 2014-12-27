exports.config = {
	specs: ['e2e/**/*.js'],
	chromeOnly: true,
	chromeDriver: "./node_modules/protractor/selenium/chromedriver",
	framework: "mocha",
	capabilities: {
		browserName: "chrome"
	},
	mochaOpts: {
		slow: 7000,
		reporter: 'spec',
		timeout: 10000
	}

};
