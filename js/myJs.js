/* This is for index page only */
/** TODO
 * Add Animations
 */

$( document ).ready(function() {    
    $('.navbar').css('background-color', 'transparent');
    $('.nav-link').css('color', '#fff');
    $('#logo').attr('src', './img/logo_ramp@2x.png'); 
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            //$('.navbar').animate({ height: '100' }); // SO SLOW!!       
            $('.navbar').css('background-color', 'white');
            $('.navbar').css('opacity', '0.95');
            $('.nav-link').css('color', '#666666');            
            $('#logo').attr('src', './img/logo_ramplogo_main@2x.png');
        } else {
            //$('.navbar').animate({ height: '150' });  
            $('.navbar').css('background-color', 'transparent');
            $('.nav-link').css('color', '#fff');        
            $('#logo').attr('src', './img/logo_ramp@2x.png');        
        }        
    });    
});



/* simple jquery click example */
/*
$('myButton').on('click', function() {
    alert();
    $('#footerHeading').css('background-color', 'red');
})
*/

