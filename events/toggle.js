var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
  $scope.toggle = false;
  $scope.myFunction = function() {
    $scope.toggle = !$scope.toggle;
  }
})
