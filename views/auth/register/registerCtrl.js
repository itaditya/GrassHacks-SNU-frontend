angular.module('auth').controller('registerCtrl', function($scope, $location, $auth, authFactory) {
    $(document).ready(function() {
        $.backstretch("/assets/img/login-bg.jpg", {
            speed: 500
        });
        $scope.user = {};
        $scope.isChecking = false;
        $scope.register = function(form) {
            if (form.$valid) {
                $scope.isChecking = true;
                $auth.submitRegistration($scope.user)
                    .then(function(resp) {
                        $.gritter.add({
                            title: 'Login Success!',
                            text: 'Yeah',
                            image: 'assets/img/ui-sam.jpg',
                            class_name: 'my-sticky-class'
                        });
                        $scope.isChecking = false;
                        // handle success response
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
