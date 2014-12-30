'use strict';

angular.module('angularRssReader')
	.controller('MainCtrl', function ($http, $scope) {

		$scope.input = {
			rssURL: '',
			showFullContent: {}
		};
		$scope.feed = null;
		$scope.error = null;

		$scope.cleanUp = function() {
			$scope.input.showFullContent = {};
			$scope.feed = null;
			$scope.error = null;
		}

		$scope.fetchRSS = function() {
			// console.log('fetchRSS');
			$scope.cleanUp();

			if (!($scope.input.rssURL && $scope.input.rssURL.match(/^http/i))) {
				$scope.error = "Please enter a valid RSS URL.";
				return;
			}

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
					// console.log(data);
					if (data.responseData && data.responseData.feed) {
						$scope.feed = data.responseData.feed;
					}
					else {
						if (data.responseDetails) {
							$scope.error = data.responseDetails;
						}
						else {
							$scope.error = "Cannot get RSS feed. Please try again.";
						}
					}
				})
				.error(function(data) {
					console.log('ERROR: ' + data);
					$scope.error = "Cannot get RSS feed. Please try again.";
				})
		}

	});
