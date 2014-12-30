'use strict';

describe('Feature: RSS Feed Reader', function() {

	var page = require('./main.po');

	describe('The default view', function() {

		before(function() {
			browser.get('http://localhost:3000/#/');
		});

		it('The page should include an input area', function() {
			expect(page.inputBox.isDisplayed()).to.eventually.equal(true);
		});

		it('The page should not show the feed summary section by default', function() {
			expect(page.feedSummary.isDisplayed()).to.eventually.equal(false);
		});

		it('The page should not show the rss contents section by default', function() {
			expect(page.rssContents.isDisplayed()).to.eventually.equal(false);
		});

	});

	describe('Scenario: Success', function() {

		before(function() {
			browser.get('http://localhost:3000/#/');
		});

		it('I enter a correct RSS URL', function() {
			page.inputBox.sendKeys('http://feeds.feedburner.com/TechCrunch/');
			page.goBtn.click();
		});

		it('I should see feed summary showing up', function() {
			expect(page.feedSummary.isDisplayed()).to.eventually.equal(true);
		});

		it('I should see feed title showing up', function() {
			expect(page.feedTitle.getText()).to.eventually.equal('TechCrunch');
		});

		it('I should see the correct feed title', function() {
			expect(page.feedTitle.getText()).to.eventually.equal('TechCrunch');
		});

		it('I should see the correct feed URL', function() {
			expect(page.feedUrl.getText()).to.eventually.equal('http://feeds.feedburner.com/TechCrunch/');
		});

		it('I should see RSS entries showing up', function() {
			expect(page.entries.count()).to.eventually.be.above(5);
		});

	});

	describe('Scenario: Failure', function() {

		before(function() {
			browser.get('http://localhost:3000/#/');
		});

		it('I enter an incorrect RSS URL', function() {
			page.inputBox.sendKeys('http://nosuchfeed.com/feed');
			page.goBtn.click();
		});

		it('I should not see feed summary showing up', function() {
			expect(page.feedSummary.isDisplayed()).to.eventually.equal(false);
		});

		it('I should not see any RSS entries', function() {
			expect(page.entries.count()).to.eventually.equal(0);
		});

		it('I should see error section showing up', function() {
			expect(page.errSection.isDisplayed()).to.eventually.equal(true);
		});

	});



});


