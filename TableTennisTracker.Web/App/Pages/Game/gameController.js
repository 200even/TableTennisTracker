angular.module("myApp.Pages").controller('gameController', function ($scope, $state, $http, playerService) {
    $scope.sortType = 'Nickname';
    $scope.sortReverse = false;
    $scope.searchPlayers1 = '';
    $scope.searchPlayers2 = '';
    $http.get("http://tabletennistracker.azurewebsites.net/api/players")
        .then(function (response) { $scope.players = response.data; });
    $scope.setPlayer1 = function (player) {
        playerService.setFirstPlayer(player);
        $scope.player1 = player;
        console.log($scope.player1);
    };
    $scope.setPlayer2 = function (player) {
        $scope.player2 = player;
        playerService.setSecondPlayer(player);
        console.log($scope.player2);
    };

    $scope.startGame = function () {
        $state.go('ScoreGame');
    };
    
});