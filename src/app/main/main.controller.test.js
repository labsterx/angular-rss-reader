'use strict';

describe('MainCtrl', function(){
	
	var scope;
	var createCtrl;

	beforeEach(module('angularRssReader'));

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		createCtrl = function() {
			$controller('MainCtrl', {$scope: scope});
		}
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


});
