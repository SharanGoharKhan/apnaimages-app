var app = angular.module("App");

app.directive('navBarDropbox',[function(){
	return {
		restrict: 'A',
		scope: false,
		link: function(scope,element,attrs){
			$('.special.card .image').dimmer({
        	on: 'hover'
      		});
      		$('.star.rating')
        	.rating();
      		$('.card .dimmer')
        	.dimmer({
          	on: 'hover'
        	});
		}
	};
}]);