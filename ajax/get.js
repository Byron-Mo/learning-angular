var app = angular.module("myApp", []);

app.controller("myCtrl", function($http, $scope) {
  $http({
    method: "GET",
    url: "http://www.w3schools.com/angular/customers.php"
  }).then(function success(response) {
    var data = response.data.records;
    // data.sort(function(a, b) { return compareString(a.Country, b.Country) })
    $scope.message = data;
  }, function error(response) {
    $scope.message = response.statusText;
  });

  $scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
  }
})

function compareString(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}
