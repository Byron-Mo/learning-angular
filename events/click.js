var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
  $scope.myFunction = function() {
    $scope.newText = $scope.text;
  };
})
