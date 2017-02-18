angular.module('auth').controller('loginCtrl', function($scope, $rootScope, $location, authFactory, localStorageService, $routeParams, SessionService, $auth) {
    console.log('test2');
    $(document).ready(function() {
        $.backstretch("/assets/img/login-bg.jpg", {
            speed: 500
        });
        $scope.user = {
            email: "adi@gmail.com",
            password: "aaaaaaaa"
        }
        $scope.isChecking = false;
        $scope.login = function(form) {
            if (form.$valid) {
                $scope.isChecking = true;
                $auth.submitLogin($scope.user)
                    .then(function(resp) {
                        $.gritter.add({
                            title: 'Login Success!',
                            text: 'Yeah',
                            image: 'assets/img/ui-sam.jpg',
                            class_name: 'my-sticky-class'
                        });
                        $scope.isChecking = false;
                        // handle success response
                        $location.path("/")
                    })
                    .catch(function(resp) {
                        $.gritter.add({
                            title: 'Incorrect Data!',
                            text: 'Please Fix The Errors',
                            class_name: 'my-sticky-class'
                        });
                        // handle error response
                    });
            }
        }
    });
});
