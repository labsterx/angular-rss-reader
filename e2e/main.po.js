/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.inputBox = element(by.id('rss-url'));
  this.rssContents = element(by.id('rss-contents'));
  this.goBtn = element(by.id('rss-submit'));
};

module.exports = new MainPage();

