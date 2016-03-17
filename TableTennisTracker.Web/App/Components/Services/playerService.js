angular.module("myApp").service('playerService', ['$http', function ($http) {
    var firstPlayer = {};
    var secondPlayer = {};
    var players = [];

    var setFirstPlayer = function (player) {
        firstPlayer = player;
        console.log("setFirstPlayer() OK");
    };
    var setSecondPlayer = function (player) {
        secondPlayer = player;
        console.log("setSecondPlayer() OK");
    };

    var getFirstPlayer = function () {
        console.log("getFirstPlayer() OK");
        return firstPlayer;
    };

    var getSecondPlayer = function () {
        console.log("getSecondPlayer() OK");
        return secondPlayer;
    };

    var getPlayers = function () {
        $http.get("http://tabletennistracker.azurewebsites.net/api/players")
        .then(function (response) { players = response.data; });
        return players;
    };

    return {
        setFirstPlayer: setFirstPlayer,
        setSecondPlayer: setSecondPlayer,
        getFirstPlayer: getFirstPlayer,
        getSecondPlayer: getSecondPlayer,
        getPlayers: getPlayers
    };
}]);