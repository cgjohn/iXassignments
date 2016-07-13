var app = angular.module("movieSearch", ["ngRoute"]);
//giphy beta key: dc6zaTOxFJmzC

app.config(function($routeProvider){

	$routeProvider.when('/', {
	controller: 'MainCtrl',
	templateUrl: 'templates/main.html',
	})

	$routeProvider.when('/movie/:movieId', {
		controller: 'movieCtrl',
		templateUrl: 'templates/movie.html',
	})
});

app.controller("MainCtrl", function($scope, $http ){

	$scope.submit = function() {
		$http({
			url: "http://www.omdbapi.com/?",
			method: "GET",
			params: {
				s: $scope.searchIn
			}
		}).then(function(response){
			$scope.movies = response.data.Search
			console.log(response);

		});
	}

});

app.controller("movieCtrl", function($scope, $http, $routeParams ){
		$http({
			url: "http://www.omdbapi.com/?i=" + $routeParams.movieId + "&plot=full&r=json",
			method: "GET"
			
		}).then(function(response){
			$scope.movie = response.data
			console.log(response);

			$http({
				url: "http://api.giphy.com/v1/gifs/translate",
				method: "GET",
				params: {
					api_key: "dc6zaTOxFJmzC",
					s: $scope.movie.Title
				}

			}).then(function(response){
				console.log(response);
				$scope.gif = response.data.data;

			});

		});

		
	

});
