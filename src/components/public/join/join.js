var app = angular.module('App');

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.join",{
			url: "/join",
			templateUrl: "/templates/components/public/join/join.html",
			controller: "JoinController"
		})
}); 

app.controller("JoinController", function ($scope,$http) {
	$scope.gmail = {
			username: '',
			email: '',
			g_image: ''
		};
	$scope.facebook = {
			username: '',
			email: '',
			f_image: ''
	};	
	$scope.register=function()
	{
		$http.post($scope.app.apiUrl+"/auth/register",$scope.user)
			.then(function(response){
				if(response=='success')
				{
					console.log('success');
				}
				else
				{
					console.log('failed');
				}
			})
	}
	$scope.login=function(type)
	{		
	 // FB.getLoginStatus(function(response) {
	 //    statusChangeCallback(response);
	 //  });
	}
});