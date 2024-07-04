gsap.to(".bottom-section", {
  scale: 1.5, // Adjust the scale factor as needed
  duration: 3,
  scrollTrigger: {
    trigger: "#myVideo",
    scrub: true,
  },
});
