/// <reference path="" />
/// <reference path="Pages/ContactUs/contactus.html" />
/// <reference path="" />
/// <reference path="" />
/// <reference path="" />

// Define your Routing here.

angular.module("myApp")
    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider.state('Home', {
            url: '/home',
            templateUrl: 'App/Pages/Home/home.min.html',
            controller: 'homeController'
        })
        .state('PlayerTable', {
            url: '/PlayerTable',
            templateUrl: 'App/Pages/PlayerTable/playerTable.min.html',
            controller: 'playerTableController'
        })
        .state('Game', {
            url: '/Game',
            templateUrl: 'App/Pages/Game/game.min.html',
            controller: 'gameController',
            controllerAs: 'gameCtrl'
        })
        .state('ScoreGame', {
            url: '/CurrentGame',
            templateUrl: 'App/Pages/ScoreGame/scoreGame.min.html',
            controller: 'ScoreGameController'
        })
        .state('Contactus', {
            url: '/Contactus',
            templateUrl: 'App/Pages/ContactUs/contactus.min.html',
            controller: 'contactusController'
        })
        .state("otherwise", {
            url: "*path",
            templateUrl: "App/Pages/NotFound/notFound.html"
        });
    }])

    // If you want to go to a default state on every startup
    // Define it here
    .run(["$location", function ($location) {
        // Go to state dashboard
        $location.url('/home');
    }]);
