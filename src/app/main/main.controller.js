'use strict';

angular.module('angularRssReader')
	.controller('MainCtrl', function ($http, $scope) {

		$scope.rssEntries = [];
		$scope.input = {
			rssURL: '',
			category: '',
			showFullContent: {}
		};
		$scope.feed = null;

		$scope.fetchRSS = function() {
			// console.log('fetchRSS');
			$scope.input.showFullContent = {};
			var googleAPI = 'http://ajax.googleapis.com/ajax/services/feed/load?callback=JSON_CALLBACK';
			var config = {
				params: {
					"v": "1.0",
					"num": 50,
					"q": $scope.input.rssURL
				}
			};
			$http.jsonp(googleAPI, config)
				.success(function(data) {
					$scope.feed = data.responseData.feed;
					console.log(data.responseData.feed);
				})
				.error(function(data) {
					console.log('ERROR: ' + data);
				})
		}

	});
