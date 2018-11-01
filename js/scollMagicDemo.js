var controller = new ScrollMagic.Controller();

const demoScene = new ScrollMagic.Scene({
    duration: 100,  // lasts 100 px distance,
    offset: 50,      // animation starts after 50px of scrolling
    triggerElement: "#stratImg",

}) 
    .setPin("#stratImg")
    .addTo(controller);