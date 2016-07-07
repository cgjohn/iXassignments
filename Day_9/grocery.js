var app = angular.module('theGroceryList', []);

app.controller('groceryCtrl', function($scope) {
	$scope.groceries = [];

	$scope.addItem = function() {
		var isIncluded = false;
		if(!isNaN($scope.item)){
			$scope.item = "";
			return;
		}
		if(isNaN($scope.amount)){
			$scope.amount = "";
			return;
		}
		for(var i = 0 ; i < $scope.groceries.length; i++) {
			if ($scope.groceries[i].name === $scope.item) {
				$scope.groceries[i].amt += parseInt($scope.amount);
				isIncluded = true;
			}
		}
		if (isIncluded === false){
			var newItem = {
				name: $scope.item,
				amt: parseInt($scope.amount),
				isEditing: false
			};
			$scope.groceries.push(newItem);
		}
		$scope.item = "";
		$scope.amount = "";
	};

	


	$scope.add = function(item) {
		item.amt += 1;
	};

	$scope.subtract = function(item) {
		if(item.amt != 0) {
			item.amt -= 1;
		}
	};

	$scope.delete = function(index) { // splice is used to remove something from an array
		$scope.groceries.splice(index, 1); //splice() takes a position and a number of items to remove
	};

	$scope.emptyCart = function() {
		$scope.groceries.splice(0, $scope.groceries.length);
	};


});
