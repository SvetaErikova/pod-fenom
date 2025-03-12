window.addEventListener('scroll', function() {
  let parallax = document.getElementById('parallax');
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.5 + 'px'; // 0.5 - коэффициент для параллакса
});


// Функция для запуска анимации
const splitTextElements = document.querySelectorAll("[data-split-text]");

// Проходимся по каждому элементу и применяем анимацию
splitTextElements.forEach((element) => {
  // Анимация для span внутри элемента
  gsap.from(element.querySelectorAll("span"), {
    duration: 1,
    y: "100%", // Поднимаем текст снизу
    opacity: 0, // Начальная прозрачность
    stagger: 0.1, // Задержка между анимациями span
    ease: "power4.out",
    scrollTrigger: {
      trigger: element, // Элемент, который запускает анимацию
      start: "top 80%", // Анимация начнется, когда верх элемента достигнет 80% viewport
      end: "bottom 20%", // Анимация закончится, когда низ элемента достигнет 20% viewport
      toggleActions: "play none none none", // Анимация играет только при входе в viewport
    },
  });
});

