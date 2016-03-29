// var app = angular.module("myApp", []);
//
// app.controller("myController", function($scope) {
//   $scope.firstName = "byron";
//   $scope.lastName = "mo";
//   $scope.fullName = function() {
//     return $scope.firstName + " " + $scope.lastName;
//   };
// });


angular.module("myApp", []).controller("namesCtrl", function($scope) {
  $scope.names = [
    {name:'Jani',country:'Norway'},
    {name:'Hege',country:'Sweden'},
    {name:'Kai',country:'Denmark'}
  ];
})
