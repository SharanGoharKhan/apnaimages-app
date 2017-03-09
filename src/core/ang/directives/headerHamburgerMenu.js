var app = angular.module("App");

app.directive('headerHamburgerMenu', ['$rootScope', function($rootScope) {
	return {
		restrict: 'E',
		scope: false,
		templateUrl: '/templates/core/ang/templates/headerHamburgerMenu.html',
		link: function(scope, element, attrs) {
			scope.onClick = function() {
  				$('button', element).toggleClass('expanded').siblings('div').slideToggle();
			};

			scope.onClick = function() {
				$('button', element).toggleClass('expanded').siblings('div').slideToggle();
			};
		}
	};
}]);