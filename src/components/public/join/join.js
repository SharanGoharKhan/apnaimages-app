var app = angular.module('App');

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.join",{
			url: "/join",
			templateUrl: "/templates/components/public/join/join.html",
			controller: "JoinController"
		})
}); 

app.controller("JoinController", function ($scope,$http,localStorageService,$rootScope) {
	$scope.gmail = {
			username: '',
			email: '',
			g_image: '',
			access_token: ''
		};
	$scope.facebook = {
			username: '',
			email: '',
			f_image: '',
			access_token: ''
	};	
	$scope.register=function()
	{
		$http.post($scope.app.apiUrl+"/auth/register",$scope.user)
			.then(function statusChangeCallback(response){
				$rootScope.$user=response.data;
				localStorageService.set('$user',$rootScope.$user);
				console.log("success");
			},function errorCallback(response)
			{
				$scope.error_message="Email already exists"
			});
	}
	$scope.login=function(type)
	{		
		console.log("login");
		return;
	 // FB.getLoginStatus(function(response) {
	 //    statusChangeCallback(response);
	 //  });
	}
});