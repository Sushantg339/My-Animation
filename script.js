let tl = gsap.timeline();

tl.from(".nav h3",{
   y:-50,
   delay:0.5,
   opacity:0,
   duration:1,
   stagger:0.5
});

tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:1,
    stagger:0.5
});

tl.from("#img1",{
    x:300,
    rotate:45,
    duration:2,
    opacity:0,
})

tl.from("#img2",{
    x:-300,
    rotate:-45,
    duration:2,
    opacity:0
})

tl.from("#img3",{
    x:300,
    rotate:45,
    duration:2,
    opacity:0
})