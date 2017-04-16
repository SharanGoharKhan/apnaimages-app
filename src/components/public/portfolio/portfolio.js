var app = angular.module('App');

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.portfolio",{
			url: '/portfolio',
			templateUrl: "/templates/components/public/portfolio/portfolio.html",
			controller: "PortfolioController"
		})
}); 
app.controller("PortfolioController", function ($scope) {

});