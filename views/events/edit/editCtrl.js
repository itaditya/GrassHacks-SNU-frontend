angular.module('events').controller('editCtrl', function($scope, $rootScope, $location, eventsFactory, localStorageService, $routeParams, SessionService) {
    console.log("r", $routeParams);
    eventsFactory.get($routeParams.id).then(function(res) {
        $scope.event = res.data;
        $rootScope.$broadcast('data.loaded');
    });
    $scope.updateEvent = function(form) {
        if (form.$valid) {
            var x = {
                design_event: $scope.event
            }
            console.log(x);
            eventsFactory.save($routeParams.id,x).then(function(res) {
                console.log(res.data);
                var unique_id = $.gritter.add({
                    title: 'Event Updated!',
                    text: '<a href="/events"></a>',
                    image: 'assets/img/ui-sam.jpg',
                    class_name: 'my-sticky-class'
                });
                if (res.data.status === "1") {} else {}
            });
        }
    }
});