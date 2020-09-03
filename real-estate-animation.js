var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.staggerFrom(".real-estate-cards-1", 1.5, {
    x:-950,
    ease: Power2.easeOut,
    stagger: {
    amount: 1
    },
    opacity:0
});

tl.staggerFrom(".real-estate-cards-2", 2, {
  x:950,
  ease: Power2.easeOut,
  stagger: {
  amount: 1
  },
  opacity:0
});

var scene = new ScrollMagic.Scene({
  triggerElement: "#trigger-element-1",
  triggerHook: 0
})
  /*.addIndicators({
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white",
    indent: 5
  })*/
  .setTween(tl)
  .addTo(controller);