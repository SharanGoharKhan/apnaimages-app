var app = angular.module("App");

app.directive('navBarMenu', [function() {
	return {
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs) {
			$('.ui.menu .ui.dropdown').dropdown({
        	on: 'hover'
      		});
      		$('.ui.menu a.item')
        	.on('click', function() {
          	$(this)
            .addClass('active')
            .siblings()
            .removeClass('active');
        });
		}
	};
}]);