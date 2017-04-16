app.directive('imFacebookAuth',function()
{
	return {
		restrict: 'E',
		scope: true,
		templateUrl: '/templates/core/ang/templates/facebookLogin.html',
		link: function(scope,element,attrs)
		{
			scope.onClick = function()
			{
				FB.login(function(response)
				{
					if(response.authResponse)
					{
						FB.api('/me','GET', {fields: 'email, first_name, name, id, picture'}, function(response)
						{
							scope.$apply(function(){
									scope.facebook.username = response.name;
									scope.facebook.email = response.email;
									scope.facebook.f_image = response.picture.data.url;
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
				scope.facebook.access_token=FB.getAccessToken();
			}
		}
	}
})