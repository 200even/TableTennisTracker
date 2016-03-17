angular.module("myApp").controller('ScoreGameController', ['$scope', 'playerService', '$http', '$state', function ($scope, playerService, $http, $state) {
    $scope.isGameOver = false;
    $scope.player1 = playerService.getFirstPlayer();
    $scope.player2 = playerService.getSecondPlayer();

    $scope.newPlayers = function () {
        $state.go('Game');
    };

    $scope.scoreGame = function (winner, loser) {
        var date = new Date();
        var request = ({
            method: 'POST',
            url: 'http://tabletennistracker.azurewebsites.net/api/games',
            data: {
                Winner: winner,
                Loser: loser,
                GameDate: date
            }
        });
        $http(request).then(function (response) {
            console.log("Game scored");
            $scope.winner = response.data.Winner;
            $scope.loser = response.data.Loser;

            if ($scope.player1.Id === winner.Id) {
                $scope.player1 = winner;
                $scope.player2 = loser;
            } else {
                $scope.player2 = winner;
                $scope.player1 = loser;
            }
            console.log("loser recorded");
            console.log("winner recorded");
            $scope.isGameOver = true;
        });
    };
}]);