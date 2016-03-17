angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
    $scope.calcSquare = function(side) {
        var service ='http://localhost:8080/RESTExample/sckqn8/area/square/'+side; 
        $http({
            method:'GET',
            url:service
        })
        .success(function(data) {
            $scope.areaSquare = "Area of Square="+data.SquareArea;
            return data.SquareArea;
        })
    }
})

.controller('ChatsCtrl', function($scope, $http) {
$scope.calcRec = function(length, breadth) {
        var service ='http://localhost:8080/RESTExample/sckqn8/area/rectangle/'+length+'/'+breadth; 
        $http({
            method:'GET',
            url:service
        })
        .success(function(data) {
            $scope.areaRec = "Area of Rectangle="+data.RectangleArea;
            return data.RectangleArea;
        })
    }
})


.controller('AccountCtrl', function($scope, $http) {
 $scope.calcKgs = function(po) {
        var service ='http://localhost:8080/RESTExample/sckqn8/convert/pounds/'+po; 
        $http({
            method:'GET',
            url:service
        })
        .success(function(data) {
            $scope.kgsResult = "Kgs="+data.Kilograms;
            return data.Kilograms;
        })
    }
 $scope.calcPounds = function(p) {
     var kgs = p/2.2046;
     kgs = Math.round(kgs);
     return kgs;
 }
});
