/* This is for index page only */
$(document).ready(function() {       
    $(window).scroll(function() {
        // When scrolled down past 100pixels
        if ($(this).scrollTop() > 100) {
            $('nav').removeClass('nav-before');
            //$('nav').addClass('nav-after'); 
        // When scrolled back to top           
        } else {
            //$('nav').removeClass('nav-after');
            $('nav').addClass('nav-before');            
        }
    });
});


// The old animations using jQuery (very slow)
/* 
$( document ).ready(function() { 
    $('.navbar').css('background-color', 'transparent');
    $('.nav-link').css('color', '#fff');
    $('#logo').attr('src', './img/logo_ramp@2x.png');
    $('a.nav-link').hover(
        function() {
            $(this).css('color', '#414082');
        }, function() {
            $(this).css('color', '#fff');
        }
    ); 
    $(window).scroll(function(e) {
        if ($(this).scrollTop() > 100) {            
            e.preventDefault();
            $('.navbar').animate({
                height: '130'
            }, 10, function() {                
            });             
            
            //$('.navbar').css('transition', 'height 2s');
            
            $('.navbar').css('background-color', 'white');
            $('.navbar').css('opacity', '0.95');
            $('.nav-link').css('color', '#666666');            
            $('#logo').attr('src', './img/logo_ramplogo_main@2x.png');
            $('a.nav-link').hover(
                function() {
                    $(this).css('color', '#414082');
                }, function() {
                    $(this).css('color', '#666666');
                }
            );
        } else {
            e.preventDefault();
            //$('.navbar').animate({ height: '150', duration: 400  }); 
            $('.navbar').animate({
                height: '150'
            }, 10, function() {                
            }); 

            $('.navbar').css('transition', 'height 2s');            
            $('.navbar').css('background-color', 'transparent');
            $('.nav-link').css('color', '#fff');        
            $('#logo').attr('src', './img/logo_ramp@2x.png');
            $('a.nav-link').hover(
                function() {
                    $(this).css('color', '#414082');
                }, function() {
                    $(this).css('color', '#fff');
                }
            );
            		
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

