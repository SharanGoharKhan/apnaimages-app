var app = angular.module('App');

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.join",{
			url: "/join",
			templateUrl: "/templates/components/public/join/join.html",
			controller: "JoinController"
		})
}); 

app.controller("JoinController", function ($scope) {

});