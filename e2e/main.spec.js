'use strict';

describe('The main view', function() {
	var page;

	beforeEach(function() {
		browser.get('http://localhost:3000/#/');
		page = require('./main.po');
	});

	it('The page should include an input area', function() {
		expect(page.inputBox.isDisplayed()).to.eventually.equal(true);
	});

	it('The page should not show the rss contents section by default', function() {
		expect(page.rssContents.isDisplayed()).to.eventually.equal(false);
	});

	it('I should see RSS entries showing up after entering a correct URL', function() {
		page.inputBox.sendKeys('http://feeds.feedburner.com/TechCrunch/');
		page.goBtn.click();
		expect(page.entries.count()).to.eventually.be.above(1);
	});


});
