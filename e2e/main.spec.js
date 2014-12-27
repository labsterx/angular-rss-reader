'use strict';

describe('The main view', function () {
	var page;

	beforeEach(function () {
		browser.get('http://localhost:3000/#/');
		page = require('./main.po');
	});

	it('should include an input area', function() {
		expect(page.inputBox.isPresent()).to.eventually.equal(true);
	});

	// it('list more than 5 awesome things', function () {
	//   expect(page.thumbnailEls.count()).toBeGreaterThan(5);
	// });

});
