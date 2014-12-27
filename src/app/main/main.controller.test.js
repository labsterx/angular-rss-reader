'use strict';

describe('MainCtrl', function(){
	
	var scope;
	var createCtrl;
	var successData;

	beforeEach(module('angularRssReader'));

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		createCtrl = function() {
			$controller('MainCtrl', {$scope: scope});
		};
		successData = {
			responseData: {
				feed: {
					title: '<title>',
					feedUrl: '<feedUrl>',
					author: '<feedAuthor>',
					entries: [
						{
							title: '<title 1>',
							contentSnippet: '<content Snippet 1>',
							publishedDate: '<publishedDate 1>',
							content: '<content 1>',
						},
						{
							title: '<title 2>',
							contentSnippet: '<content Snippet 2>',
							publishedDate: '<publishedDate 2>',
							content: '<content 2>',
						},
						{
							title: '<title 3>',
							contentSnippet: '<content Snippet 3>',
							publishedDate: '<publishedDate 3>',
							content: '<content 3>',
						},
					]
				}
			}
		};
	}));

	describe('.constructor', function() {

		it('can be created', function() {
			expect(createCtrl).to.not.throw();
		});

	});

	describe('Data initialization', function() {

		beforeEach(function(){
			createCtrl();
		});

		it('initializes rssEntries list to be empty', function() {
			expect(scope.rssEntries.length).to.be.equal(0);
		});		

	})

	describe('#fetchRSS', function() {

		describe('success', function() {

			beforeEach(inject(function($httpBackend) {
				var googleAPI = 'http://ajax.googleapis.com/ajax/services/feed/load?callback=JSON_CALLBACK&num=50&q=%3Cinput+RSS+URL%3E&v=1.0';
				$httpBackend.whenJSONP(googleAPI).respond(successData);
				createCtrl();
				scope.input.rssURL = '<input RSS URL>';
			}));

			it('populate the feed with correct data', inject(function($httpBackend) {
				scope.fetchRSS();
				$httpBackend.flush();
				expect(scope.feed).to.be.deep.equal(successData.responseData.feed);
			}));

		});

	});


});
