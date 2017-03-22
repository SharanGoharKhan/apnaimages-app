var app = angular.module("App");

app.directive('navBarDropbox',[function(){
	return {
		restrict: 'A',
		scope: false,
		link: function(scope,element,attrs){
			$('.ui.dropdown').dropdown();
	      			$('.ui.buttons .dropdown.button').dropdown
	      			({
	        			action: 'combo'
	      			});
		}
	};
}]);