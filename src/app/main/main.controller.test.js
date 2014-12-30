'use strict';

describe('MainCtrl', function(){

	var scope;
	var createCtrl;
	var successData;
	var failureData;

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
		failureData = {
			responseData: null,
			responseDetails: 'Feed could not be loaded.',
			responseStatus: 400
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

		it('feed should be null', function() {
			expect(scope.feed).to.be.null;
		});

		it('error should be null', function() {
			expect(scope.error).to.be.null;
		});

	});

	describe('#cleanUp', function() {

		beforeEach(function(){
			createCtrl();
		});

		it('cleans up feed', function() {
			scope.feed = { 'foo': 'bar' };
			scope.cleanUp();
			expect(scope.feed).to.be.null;
		});

		it('cleans up error', function() {
			scope.error = { 'foo': 'bar' };
			scope.cleanUp();
			expect(scope.error).to.be.null;
		});

		it('cleans up showFullContent', function() {
			scope.showFullContent = { 'foo': 'bar' };
			scope.cleanUp();
			expect(scope.input.showFullContent).to.be.deep.equal({});
		});

	});

	describe('#fetchRSS', function() {

		describe('Success', function() {

			beforeEach(inject(function($httpBackend) {
				var googleAPI = 'http://ajax.googleapis.com/ajax/services/feed/load?callback=JSON_CALLBACK&num=50&q=http:%2F%2Fsuccess-test.com%2Ffeed%2F&v=1.0';
				$httpBackend.whenJSONP(googleAPI).respond(successData);
				createCtrl();
				scope.input.rssURL = 'http://success-test.com/feed/';
			}));

			it('populate the feed with correct data', inject(function($httpBackend) {
				scope.fetchRSS();
				$httpBackend.flush();
				expect(scope.feed).to.be.deep.equal(successData.responseData.feed);
			}));

		});

		describe('Error: invalid input', function() {

			beforeEach(function() {
				createCtrl();
			});

			it('shows error if the input is empty', function() {
				scope.input.rssURL = '';
				scope.fetchRSS();
				expect(scope.error).not.to.be.null;
			});

			it('shows error if the input is not a valid URL', function() {
				scope.input.rssURL = 'blah';
				scope.fetchRSS();
				expect(scope.error).not.to.be.null;
			});

			it('shows error if the input URL does not contain valid RSS feed', inject(function($httpBackend) {
				var googleAPI = 'http://ajax.googleapis.com/ajax/services/feed/load?callback=JSON_CALLBACK&num=50&q=http:%2F%2Ffailure-test.com%2Ffeed%2F&v=1.0';
				$httpBackend.whenJSONP(googleAPI).respond(failureData);
				scope.input.rssURL = 'http://failure-test.com/feed/';
				scope.fetchRSS();
				$httpBackend.flush();
				expect(scope.error).to.equal(failureData.responseDetails);
			}));

		});


	});


});
