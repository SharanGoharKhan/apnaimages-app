var app = angular.module ('App');

app.config(function($httpProvider){
	$httpProvider.interceptors.push('httpInterceptor');
});

app.factory('httpInterceptor', function ($q, $rootScope, $injector, $location) {
    return {
        'request': function (config) {
            return config || $q.when(config);
        },
        'response': function(response) {        	
            return response;
        },
        'requestError': function (rejection) {
            return $q.reject(rejection);
        },
        'responseError': function (rejection) {
            return $q.reject(rejection);           
        }
    };
});