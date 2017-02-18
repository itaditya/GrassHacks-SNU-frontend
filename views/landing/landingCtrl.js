angular.module('ClubPortal').controller('landingCtrl', function($scope, $rootScope, $location, authFactory, eventsFactory, localStorageService, $routeParams, SessionService) {
    $scope.clubs = [{
        title: "technical",
        desc: "Ipsum"
    }, {
        title: "programming",
        desc: "Ipsum"
    }, {
        title: "web",
        desc: "Lorem"
    }, {
        title: "design",
        desc: "Ipsum"
    }];
    eventsFactory.getList().then(function(data) {
        console.log(data.data);
        $scope.events = data.data;
        $rootScope.$broadcast('data.loaded');
        $rootScope.$on('auth:login-success', function(ev, user) {
            console.log('yeah');
        });
    });
});