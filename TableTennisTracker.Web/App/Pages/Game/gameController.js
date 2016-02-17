angular.module("myApp.Pages").controller('gameController', function ($scope, $state, $http) {
    $scope.sortType = 'Nickname';
    $scope.sortReverse = false;
    $scope.searchPlayers1 = '';
    $scope.searchPlayers2 = '';
    $http.get("http://tabletennistracker.azurewebsites.net/api/players")
        .then(function (response) { $scope.players = response.data; });
    $scope.player1 = {};
    $scope.player2 = {};
    $scope.setPlayer1 = function (player) {
        $scope.player1 = player;
        console.log($scope.player1);
    };
    $scope.setPlayer2 = function (player) {
        $scope.player2 = player;
        console.log($scope.player2);
    };
    
});