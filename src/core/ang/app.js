var app = angular.module('App',['ui.router','restangular','ngCookies','ngSanitize','angular-momentjs', 'ngFileUpload','LocalStorageModule']);

// app.config(function($locationProvider, $stateProvider, $urlRouterProvider,$sceDelegateProvider,$sceProvider){
// 	$sceProvider.enabled(false);
// });

app.run(function($rootScope, $location, $state,$moment){
	var env = $location.host().split('.').pop();
	var protocol = "http";
	$rootScope.app = {
		"name" : "ApnaImages",
		"apiUrl" : protocol + "://api.apnaimages." + env,
		"appUrl" : protocol + "://app.myndplan." + env,
		"env" : env
	};
});
//Google authentication
function onLoadFunction()
{
	gapi.client.setApiKey('AIzaSyCN4KQk7B_O2YTmV2_sZtwgZ1Fo0ZhHQfU');
	gapi.client.load('plus','v1',function(){});

}