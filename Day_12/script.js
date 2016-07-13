var app = angular.module('chommiesApp', ['ngRoute']); 

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'FeedCtrl',
		templateUrl: 'templates/feed.html',
	})
	$routeProvider.when('/myProfile', {
		controller: 'ProfileCtrl',
		templateUrl: 'templates/profile.html',
	})

});

app.controller('FeedCtrl', function($scope, $http) {
	
	$scope.errorMessage = "";

	console.log($scope.item);	
	$http({
	    method: "GET",
	    url: "http://ixchommies.herokuapp.com/props",
	    params: {
       		token: "3a0e3277c3aa8735f21235c08dbd2707"
	    }
	  }).then(function(response) {
	  
	  	$scope.props = response.data;
	  })

	$http({
	    method: "GET",
	    url: "http://ixchommies.herokuapp.com/brus",
	    params: {
       		token: "3a0e3277c3aa8735f21235c08dbd2707"
	    }
	  }).then(function(response) {
	  	console.log(response);
	  	$scope.brus = response.data;
	  })

	$scope.sendProps = function() {
	  $http({
	    method: "POST",
	    url: "http://ixchommies.herokuapp.com/props",
	    params: {
       		token: "3a0e3277c3aa8735f21235c08dbd2707"
	    },
	    data: {
	    	for: $scope.selectedBru,
	    	props: $scope.newPropsValue 
	    }
	  }).then(function(response) {
	  	console.log(response);
	  	$scope.brus = response.data;
	  }).catch(function(error){
	  	console.log(error);
	  	$scope.errorMessage = error.data.message;

	  })
	 }

	$scope.refreshProps = function() {
		$scope.errorMessage = "";
	 $http({
	    method: "GET",
	    url: "http://ixchommies.herokuapp.com/props",
	    params: {
       		token: "3a0e3277c3aa8735f21235c08dbd2707"
	    }
	  }).then(function(response) {
	  
	  	$scope.props = response.data;
	  })

	  $http({
	    method: "GET",
	    url: "http://ixchommies.herokuapp.com/brus",
	    params: {
       		token: "3a0e3277c3aa8735f21235c08dbd2707"
	    }
	  }).then(function(response) {
	  	console.log(response);
	  	$scope.brus = response.data;
	  })
	}

});

app.controller('ProfileCtrl', function($scope, $http) {

	$http({
	    method: "GET",
	    url: "http://ixchommies.herokuapp.com/props/me",
	    params: {
       		token: "3a0e3277c3aa8735f21235c08dbd2707"
	    }
	  }).then(function(response) {
	  	console.log(response);
	  	$scope.props = response.data;
	  })


});






