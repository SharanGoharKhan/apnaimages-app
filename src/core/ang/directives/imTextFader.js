var app = angular.module("App");

app.directive('imTextFader', [function() {
	return {
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs) {
			// $('.ui.menu .ui.dropdown').dropdown({
   //      	on: 'hover'
   //    		});
   //    		$('.ui.menu a.item')
   //      	.on('click', function() {
   //        	$(this)
   //          .addClass('active')
   //          .siblings()
   //          .removeClass('active');
   // for(var f=0;f<100;f++)
   // {
        //while(true)
        //{
          // for(var i=0;i<element.children.length;++i)
          // {
          //   $(element[0].children[i]).fadeIn(1000);
          //   $(element[0].children[i]).fadeOut(1000);

          // }
        //}  
        
   // }
        // console.log(element[0].children[0])
        // console.log("imTextFader called");

        //});
        var children=$(element[0].children);
        for(var i=0;i<children.length;i++)
        {
          $(children[i]).fadeIn("slow");
          //setTimeout(function(){ console.log("Time out") }, 30000);
        }
		}
	};
}]);