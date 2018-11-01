var controller = new ScrollMagic.Controller();

const intro = new ScrollMagic.Scene({
    duration: 500,  // lasts 500px of distance
    offset: 360,      // animation starts after 360px of scrolling
    triggerElement: "#intro",

}) 
    .setPin("#intro")
    .addTo(controller);


