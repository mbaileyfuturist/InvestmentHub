//Spacer
gsap.from('.menu', {duration:2, opacity:0, y:50})
gsap.from('.column-label', {duration:2, y:50, opacity:0, stagger: 0.5});

//Stock Market
TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.staggerFrom('.card-container', 2 ,{
    opacity:0, 
    cycle: {
        y: [-100, 100]
    }, 
    stagger:{
        from:"center",
        amount: 0.75
    }
});

var scene = new ScrollMagic.Scene({
    triggerElement: "#stock-market",
    duration: "50%",
  })
  .setTween(tl)
  .addTo(controller);
