var app = angular.module('myApp', []);

app.controller('mobileController', function($scope, $http) {
     $http.jsonp(
            'http://localhost/Wserver/api/gome_list.php?callback=JSON_CALLBACK'
        ).success(function(response) {
            if(response.success) {
                 $scope.lis = response.data;
                 
                
            }
            console.log(response)
        });
})