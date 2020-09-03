//Spacer
gsap.from('.column-label', {duration:2, y:50, opacity:0, stagger: 0.5});
gsap.from('.continue-label', {delay:2, duration:2, y:50, opacity:0, stagger: 0.5});


//Stock Market
TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.staggerFrom('.card-container', 1 ,{
    opacity:0, 
    cycle: {
        y: [-200, 200]
    }, 
    stagger:{
        from:"center",
        amount: 0.5
    }
});

var scene = new ScrollMagic.Scene({
    triggerElement: "#stock-market",
    duration: "50%",
  })
  .setTween(tl)
  .addTo(controller);
