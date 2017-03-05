var app = angular.module('App',['ui.router','restangular', 'ui.bootstrap','ngCookies','ngSanitize','angular-momentjs', 'ngFileUpload']);

// app.config(function($locationProvider, $stateProvider, $urlRouterProvider,$sceDelegateProvider,$sceProvider){
// 	$sceProvider.enabled(false);
// });

app.run(function($rootScope, $location, $state,$moment){

 //    var domainParts = $location.host().split('.');
 //    var env = domainParts.pop();
 //    var domain = domainParts.pop() + "." + env + ($location.port() == 80 ? '' : ':' + $location.port());
 //    var protocol = (env == 'com') ? 'https' : 'http';
 //    var apiURL = protocol + '://api.apnaimages.' + (env == 'dev' ? 'dev:8000' : env);

 //    $rootScope.$state = $state;
 //    $rootScope.$moment = $moment;
 //    $rootScope._ = _;

	// $rootScope.env = {
	// 	apiURL: apiURL,
 //        env: env,
 //        domain: domain,
 //        wwwDomain: protocol + '://www.' + domain
	// }

});