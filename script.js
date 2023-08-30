gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height: "90px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: true
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -100%",
        scrub: true
    }
})