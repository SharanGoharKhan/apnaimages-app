var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.profile.edit_profile",{
			url: "/edit_profile",
			templateUrl: "/templates/components/public/profile/edit_profile/edit_profile.html",
			controller: "EditProfileController"
		})
}); 

app.controller("EditProfileController", function ($scope, $rootScope) {
	console.log("Edit Profile")
});