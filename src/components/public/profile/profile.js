var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.profile",{
			url: "/profile",
			templateUrl: "/templates/components/public/profile/profile.html",
			controller: "ProfileController"
		})
}); 

app.controller("ProfileController", function ($scope, $rootScope) {
	console.log("Profile");
});