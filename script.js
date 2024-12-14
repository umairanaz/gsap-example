

gsap.from('.center h1', {
    duration: 1,
    x: -1300,
    scrollTrigger: {
        trigger: ".center",
        markers: true,
        scrub: true,
        start: "top 100%", 
        end: "top -100%",  
        scroll :"body",
    }
});
