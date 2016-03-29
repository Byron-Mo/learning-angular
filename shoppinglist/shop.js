var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
  $scope.list = ["Milk", "Bread", "Cheese"];
  $scope.duplicate = false;
  $scope.addList = function() {
    if (included($scope.list, $scope.input)) {
      $scope.duplicate = true;
    } else {
      $scope.duplicate = false;
      $scope.list.push($scope.input)
    }
  }
  $scope.delete = function(index) {
    $scope.list.splice(index, 1)
  }
})

var included = function(array, target) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
  }
  return false;
}
