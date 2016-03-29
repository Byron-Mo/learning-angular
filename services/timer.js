var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $interval) {
  $scope.timer = 0;
  $interval(function() {
    $scope.timer = Math.round(($scope.timer + 0.1) * 10);
    $scope.timer = ($scope.timer / 10)
  }, 100);
})
