var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http) {
  $scope.myFunc = function() {
    $http({
      method: "POST",
      url: ""
    }).then(function success(response) {
      $scope.data = response.data;
    }, function error(response) {
      $scope.data = response.StatusText
    });
  }
})
