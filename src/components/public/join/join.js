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
		if(type == 'gmail')
		{
			var params = {
				'clientid': '119418628600-rdimbrg6324ia9sdoe6rbhl4hdlrd9ll.apps.googleusercontent.com',
				'cookiepolicy': 'single_host_origin',
				'callback': function(result)
				{
					if(result['status']['signed_in'])
					{
						var request = gapi.client.plus.people.get (
							{
								'userId':'me'
							}
						);
						request.execute(function(resp){
							$scope.$apply(function(){
								$scope.gmail.username = resp.displayName;
								$scope.gmail.email = resp.emails[0].value;
								$scope.gmail.g_image = resp.image.url;
							});
						});
					}
				},
				'approvalprompt': 'force',
				'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
			};
			gapi.auth.signIn(params);
		}
		if(type=='facebook')
		{
			console.log("facebook login");
			FB.login(function(response)
			{
				if(response.authResponse)
				{
					FB.api('/me','GET', {fields: 'email, first_name, name, id, picture'}, function(response)
					{
						$scope.$apply(function(){
								$scope.facebook.username = response.name;
								$scope.facebook.email = response.email;
								$scope.facebook.f_image = response.picture.data.url;
							});
					});
				}
				else
				{
					//error

				}
			}, {
				scope: 'email, user_likes',
				return_scope: true
			});
		}
		
		// FB.getLoginStatus(function(response) {
	 //    statusChangeCallback(response);
	 //  });
	}
});