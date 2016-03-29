var app = angular.module("myApp", [])

app.controller("mySort", function($scope) {
  $scope.names = [
    {name:'Jani',country:'Norway'},
    {name:'Carl',country:'Sweden'},
    {name:'Margareth',country:'England'},
    {name:'Hege',country:'Norway'},
    {name:'Joe',country:'Denmark'},
    {name:'Gustav',country:'Sweden'},
    {name:'Birgit',country:'Denmark'},
    {name:'Mary',country:'England'},
    {name:'Kai',country:'Norway'}
  ];
  $scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
  }
})

app.filter("sortFormat", function() {
  return function(arr) {
    var dupArr = arr.slice();
    dupArr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== dupArr[i]) {
        return arr.sort();
      }
    }
    return arr.reverse();
  }
})
