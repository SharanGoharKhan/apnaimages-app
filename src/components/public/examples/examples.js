var app = angular.module('App');

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.examples",{
			url: '/examples',
			templateUrl: "/templates/components/public/examples/examples.html",
			controller: "ExamplesController"
		})
}); 
app.controller("ExamplesController", function ($scope) {

});