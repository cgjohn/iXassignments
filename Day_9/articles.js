var app = angular.module("articleFinder", []);

//api key: 17ed4e3e82b8452ca44311de480288dd

var NY_TIMES_KEY = "17ed4e3e82b8452ca44311de480288dd";
app.controller("articleCtrl", function($scope, $http) {


	$scope.submit = function() {
		$http({
			url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
			method: "GET",
			params: {
				"api-key": NY_TIMES_KEY,
				'q': $scope.searchIn
			}

		}).then(function(response) {
			$scope.articles = response.data.response.docs
			console.log(response.data.response);
		});
	};
});