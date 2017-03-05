var app = angular.module('App');
app.config(function($stateProvider,$urlRouterProvider, $locationProvider){
	
	$locationProvider.html5Mode({ enabled: true, requireBase: true });
    $stateProvider
        .state('app',{
            abstract: true,
            controller: 'AppController',
            template: '<ui-view></ui-view>'
        });

    $urlRouterProvider.otherwise(function($injector, $location){
    	var parts = $location.host().split('.');
    	var subdomain = parts.shift();

    	switch(subdomain){
    		case 'app':
    			return '/admin';
    		case 'www':
    			return '/';
    		default: 
    			return '/home';
    	}
    });
	
});
