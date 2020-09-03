var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.staggerFrom(".bonds", 1, {
    x:-950,
    ease: Sine.easeOut,
    stagger: {
    amount: 3
    }
});

tl.staggerFrom(".bond-img", 2, {
    opacity:0,
    ease:Power4.easeOut,
})

var scene = new ScrollMagic.Scene({
  triggerElement: "#trigger-element-2",
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