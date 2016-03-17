
angular.module("myApp.Pages").controller("homeController", function ($scope, $http, $state) {

    $scope.sortType = 'Rating';
    $scope.sortReverse = true;
    $scope.isLoading = true;
    $http.get("http://tabletennistracker.azurewebsites.net/api/players")
        .then(function (response) {
            $scope.topPlayers = response.data;
            $scope.isLoading = false;
        });

    $scope.newGame = function () {
        $state.go('Game');
    };
});
