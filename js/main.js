$(document).ready(function(){
    $('a.nav-link').hover(
		function() {
			$(this).css('color', '#414082');
		}, function() {
			$(this).css('color', '#666666');
		}		
	);
})