var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
  $scope.master = {firstName: "byron", lastName: "mo"};
  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  };
  $scope.reset();
})
