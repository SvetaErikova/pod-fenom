let footer = document.querySelector('.footer2')
if ( footer ) {
  let footer_action = footer.querySelector('.footer__actions')

  let observer_point = new IntersectionObserver((entries, observer) => {
    entries.forEach( (entry) =>{
      //
      // if (entry.isIntersecting) {
      //   entry.target.classList.add('fixed')
      // }
      entry.isIntersecting   ? footer_action.classList.add('fixed') : footer_action.classList.remove('fixed')

    });
  }, {
    root: null,
    rootMargin: '-5%',
    // threshold: 0.4
  })

  observer_point.observe(footer_action)
  // footer.forEach(a => {
  //   observer_point.observe(a);
  // })
  if ( window.matchMedia('(max-width:640px)').matches ) {
    window.addEventListener('scroll', (e) => {
      document.documentElement.scrollTop > 0 ? footer_action.querySelector('.footer__actions .button').classList.add('is_scrolled') : footer_action.querySelector('.footer__actions .button').classList.remove('is_scrolled')

    })
  }

}

