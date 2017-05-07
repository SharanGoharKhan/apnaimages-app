app.directive('imSignout', ['localStorageService','$state','$rootScope',function (localStorageService,$state,$rootScope) {
	return {
		restrict: 'A',
		link: function (scope, iElement, iAttrs) {
			console.log("signout caled");
			localStorageService.remove('$user');
			$rootScope.user = null;
			scope.user = null;
			// scope.$apply();	
			//TODO delete access_token
			$state.go("app.public.join");
		}
	};
}])
