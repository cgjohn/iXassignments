var app = angular.module('calculatorApp', []); 

app.controller('CalculatorCtrl', function($scope) {
  var doAdd = function() {

  }
  
  $scope.doAdd = function() { //$scope connects values to the HTML
    var numX = parseInt($scope.x); //parseInt turns input into an int
    var numY = parseInt($scope.y);
    $scope.result = numX + numY;
  };
  $scope.doMultiply = function() {
    var numX = parseInt($scope.x);
    var numY = parseInt($scope.y);
    $scope.result = numX * numY;
  };
});