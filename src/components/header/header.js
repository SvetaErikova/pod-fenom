let header_height = document.querySelector('header').getBoundingClientRect().height
document.documentElement.style.setProperty('--headerHeight', `${header_height}px`)

let header = document.querySelector('.header'),
    menu = document.querySelector('.menu'),
    burger = document.querySelector(".header__burger"),
    menu_link = menu.querySelectorAll('a')
if(burger) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("is_active");
    menu.classList.toggle("is_active");
  });
  menu_link.forEach(link => {
    link.addEventListener("click", () => {
      burger.classList.remove("is_active");
      menu.classList.remove("is_active");
    })
  })

}
