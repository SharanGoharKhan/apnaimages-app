var app = angular.module('App');

app.run(function($rootScope, $http, Session){

	Session.setUserFromCookie();
	Session.setChannelFromCookie();
	

});