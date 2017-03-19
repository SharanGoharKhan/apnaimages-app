var app = angular.module("App");

app.directive('navBarMenu', [function() {
	return {
		restrict: 'A',
		scope: true,
		link: function(scope, element, attrs) {
			scope.canShowMenu = false;
			scope.onMouseover = function() {
				scope.canShowMenu = true;
			};
			scope.onClick = function() {
				scope.canShowMenu = false;
			};
			scope.onMouseleave = function() {
				scope.canShowMenu = false;
			};
		}
	};
}]);