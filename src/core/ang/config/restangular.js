var app = angular.module('App');

app.config(function(RestangularProvider){
	RestangularProvider.setRestangularFields({
	  id: "_id"
	});
});

app.run(function($rootScope, $http, Restangular){
    Restangular.setBaseUrl($rootScope.env.apiURL);
    Restangular.setDefaultHeaders({'Content-Type': 'application/json'});

    $http.defaults.useXDomain = true;
});