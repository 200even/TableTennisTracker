
angular.module("myApp.Pages").controller("playerTableController", ['$scope', '$http', function ($scope, $http) {
    window.$scope = $scope;
    $scope.sortType = 'Nickname';
    $scope.sortReverse = false;
    $scope.searchPlayers = '';
    $scope.showSecret = false;
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
}]);