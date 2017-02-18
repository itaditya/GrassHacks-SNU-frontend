angular.module('auth', []).config(function ($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: '/views/auth/login/login.html',
        controller: 'loginCtrl'
    }).when('/register', {
        templateUrl: '/views/auth/register/register.html',
        controller: 'registerCtrl'
    }).when('/logout', {
        template: '<pre-loader></pre-loader>',
        controller: 'logoutCtrl'
    })
}).controller('logoutCtrl', function (SessionService, localStorageService, $location) {
    $auth.signOut()
        .then(function(resp) {
            $.gritter.add({
                title: 'Logged Out!',
                text: 'Do You Want To <a href="/login">Login</a>  Again ?',
                image: 'assets/img/ui-sam.jpg',
                class_name: 'my-sticky-class'
            });
            $location.path("/");
              // handle success response
        })
        .catch(function(resp) {
              // handle error response
        });
})
