// init Controller
var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 0, // top of screen
    offset: -87 // for navbar
  }
});

// Build Scene
new ScrollMagic.Scene({triggerElement: "#pic1"})
            .setClassToggle("#pic1", "disappear")
            .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#pic2"})
            .setClassToggle("#pic2", "disappear")
            .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#pic3"})
            .setClassToggle("#pic3", "disappear")
            .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#pic4"})
            .setClassToggle("#pic4", "disappear")
            .addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#pic5"})
            .setClassToggle("#pic5", "disappear")
            .addTo(controller);

            

