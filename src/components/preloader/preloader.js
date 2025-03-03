// preloader
let preloader = document.querySelector('.preloader')
let preloader_logo = preloader.querySelector('.preloader__logo')

function preloaderStart(){
  gsap.to(preloader_logo, {
    scale: 1.3,
    opacity: 1,
    filter: "blur(0px)",
    duration: 2,
    onComplete: () => {
      function preloaderAfterLoad(){
        console.log('preloader')
        gsap.to(preloader, {  transform: 'scaleY(0)', duration: 0.6, ease: "power3.inOut",},'>', );
      }
      function checkPageLoad() {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
          preloaderAfterLoad()
          clearInterval(intervalId);
        }
      }
      const intervalId = setInterval(checkPageLoad, 500);
    }
  });
}

preloaderStart()
