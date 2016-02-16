
angular.module("myApp.Pages").controller("playerTableController", function ($scope, $http) {

    $scope.sortType = 'Nickname';
    $scope.sortReverse = false;
    $scope.searchPlayers = '';
    $http.get("http://tabletennistracker.azurewebsites.net/api/players")
        .then(function (response) { $scope.players = response.data; });
    $scope.addPlayer = function () {
        $scope.players.push({
            'FirstName': $scope.name,
            'LastName': $scope.email,
            'Nickname': $scope.phone
        });

        alert($scope.name + " has been added to the customer list.");

        $scope.name = '',
          $scope.email = '',
          $scope.phone = '';
    };
});