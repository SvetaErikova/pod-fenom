if (window.matchMedia('(min-width: 641px)').matches) {
  gsap.fromTo(".info__content_image", {
    scale: 0.8,
  } , {
    scale: 1,
    scrollTrigger: {
      trigger: ".info__content_image",
      start: "top 50%",
      end: "bottom 100%",
      scrub: 2,
      markers: false,
    }
  });

}
