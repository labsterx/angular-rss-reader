/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.inputBox = element(by.id('rss-url'));
  this.rssContents = element(by.id('rss-contents'));
  this.goBtn = element(by.id('rss-submit'));
  this.feedSummary = element(by.className('feed-summary'));
  this.feedTitle = element(by.binding('feed.title'));
  this.feedUrl = element(by.binding('feed.feedUrl'));
  this.entries = element.all(by.repeater('entry in feed.entries'));
  this.errSection = element(by.id('error-section'));
  this.errMsg = element(by.id('err-message'));
};

module.exports = new MainPage();

