
angular.module("myApp.Pages").controller("playerTableController", function ($scope, $http) {

    $scope.sortType = 'Nickname';
    $scope.sortReverse = false;
    $scope.searchPlayers = '';
    $http.get("http://tabletennistracker.azurewebsites.net/api/players")
        .then(function (response) { $scope.players = response.data; });
    $scope.addPlayer = function () {
        var request = ({
            method: 'POST',
            url: 'http://tabletennistracker.azurewebsites.net/api/players',
            data: {
                FirstName: $scope.FirstName,
                LastName: $scope.LastName,
                Nickname: $scope.Nickname
            }
        });
        $http(request).then(
        $scope.players.push({
            'FirstName': $scope.FirstName,
            'LastName': $scope.LastName,
            'Nickname': $scope.Nickname,
            'Wins': 0,
            'Losses': 0,
            'TotalGamesPlayed': 0,
            'Rating': 1300
        }));

        $scope.FirstName = '',
          $scope.LastName = '',
          $scope.Nickname = '';
    };
});