/*  Neeko Blomgren
    10/26/2018

    The purpose of this script is to write behaviour for the Scroll Up Button found
    on every page. The functionality of the button is:

    - To be initially hidden from the user on page load
        (jquery Hide function w/ fade)
    - To appear on a fade-in after the user scrolls anywhere from the top
        (jquery Show function w/ fade w/ "scroll" event listener )
    - When clicked on, the window scrolls back to the top
        (scrollTop, offset jquery variables)
*/

$( document ).ready(function()
{
    // Main Script
    const initialize = function()
    {
        const btn = $('.scrollUp')

        // Hide Scroll Button on Initial Page Load
        hideElFade(btn); 

        // Binds an Event Listener on the window, on scroll, the scrollTop variable of the window is checked
        // If the value is over 0, the element fades in, if not it fades out.
        $(window).scroll(function()
        {
            if($(this).scrollTop() > 0)
            {
                showElFade(btn);
            }   else {
                hideElFade(btn);
            }
        })

        // Binds an event listener on the button element. When it is clicked
        // the window smoothly scrolls back to the top.
        btn.on('click', function(){
            scrollToTop()
        });
    }


    // My Hide Element Function
    const hideElFade = function(el)
    {
        $(el).fadeOut(500);
    }

    // My Show Element Function
    const showElFade = function(el)
    {
        $(el).fadeIn(500);
    }
    
    // My Smooth Scroll to Location Function
    const scrollToTop =  function()
    {
        window.scroll({
            top: 0,  
            behavior: 'smooth' 
          });
    }
   
    // Script Initialization
    initialize();
});

