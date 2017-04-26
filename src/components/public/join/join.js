var app = angular.module('App');

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.join",{
			url: "/join",
			templateUrl: "/templates/components/public/join/join.html",
			controller: "JoinController",
			resolve : {
				lazyLoad : function($ocLazyLoad){
					return $ocLazyLoad.load(['vendor/sweetalert/dist/sweetalert.min.js' , 'vendor/sweetalert/dist/sweetalert.css','https://cdnjs.cloudflare.com/ajax/libs/angular-sweetalert/1.1.2/SweetAlert.min.js']);
				}
			}
		})
}); 

app.controller("JoinController", function ($scope,$http,localStorageService,$rootScope,SweetAlert) {
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
		SweetAlert.swal({
		  title: "Error!",
		  text: "Here's my error message!",
		  type: "error",
		  confirmButtonText: "Cool"
		});
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