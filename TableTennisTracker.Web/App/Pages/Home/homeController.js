
angular.module("myApp.Pages").controller("homeController", function ($scope, $http) {

    $scope.sortType = 'Rating';
    $scope.sortReverse = true;
    $http.get("http://tabletennistracker.azurewebsites.net/api/players")
        .then(function (response) { $scope.topPlayers = response.data; });
});
