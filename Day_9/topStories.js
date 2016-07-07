var app = angular.module("topS", []);

var NY_TIMES_KEY = "17ed4e3e82b8452ca44311de480288dd";
app.controller("topCtrl", function($scope, $http) {
	$http({
		url: "https://api.nytimes.com/svc/topstories/v1/home.json",
		method: "GET",
		params: {
			"api-key": NY_TIMES_KEY,
		}

	}).then(function(response) {

		console.log(response);
	});

});