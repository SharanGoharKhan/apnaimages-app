var app = angular.module('App');

app.config(function($stateProvider){
	$stateProvider
		.state("app.public",{
			abstract: true,
			templateUrl: "/templates/components/public/public.html",
			controller: "PublicController"
		})
}); 
app.controller("PublicController", function ($scope) {

});