var app = angular.module('App');

app.config(function($stateProvider){
	$stateProvider
		.state("app.public",{
			abstract: true,
			templateUrl: "/templates/components/public/public.html",
			controller: "PublicController"
		})
}); 
app.controller("PublicController", function ($scope,$rootScope,localStorageService,$state) {
	$rootScope.user=localStorageService.get("$user");
	$scope.user=$rootScope.user;
	if($scope.user)
	{
		console.log("user is not empty");
	}
	else
		console.log("user is empty");
	console.log("Before signout: "+$scope.user);
	$scope.signout = function()
	{
		console.log("After signout: "+$scope.user);
		localStorageService.remove('$user');
		$rootScope.user = null;
		$scope.user = null;
		$scope.$apply();
		$state.go("app.public.join");
	}
});
