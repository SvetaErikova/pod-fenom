function zentryScroll() {
  let stickySection = document.querySelector(".image-text");

  if (window.matchMedia('(min-width: 641px)').matches && stickySection) {
    let totalStickyHeight = window.innerHeight * stickySection.querySelectorAll('.image-text__image_item').length;

    // Создаем триггер для stickySection
    ScrollTrigger.create({
      trigger: stickySection,
      start: "top top",
      end: () => `+=${totalStickyHeight}`,
      pin: true,
      pinSpacing: true,
    });

    // Создаем временную шкалу для последовательных анимаций
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stickySection,
        start: "top top",
        end: () => `+=${totalStickyHeight}`,
        scrub: true,
      },
    });

    // Получаем все элементы
    const cards = document.querySelectorAll(".image-text__image_item");
    const textItems = document.querySelectorAll(".image-text__content_item");

    // Анимация первой картинки и текста
    if (cards[0] && textItems[0]) {
      // Первая картинка уже видна, поэтому нет необходимости в анимации
      // Первый текст также должен быть изначально видимым
      gsap.set(textItems[0], { y: 0, opacity: 1 }); // Устанавливаем первый текст в центр
    }

    // Анимация для каждой карточки и соответствующего текста
    for (let i = 1; i < cards.length; i++) {
      const card = cards[i];
      const textItem = textItems[i];

      // Анимация картинки
      tl.to(card, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "none",
        onUpdate: function () {
          const progress = this.progress; // Access the tween's progress
          gsap.set(card, {
            clipPath: `polygon(
              ${gsap.utils.interpolate(40, 0, progress)}% ${gsap.utils.interpolate(25, 0, progress)}%,
              ${gsap.utils.interpolate(60, 100, progress)}% ${gsap.utils.interpolate(25, 0, progress)}%,
              ${gsap.utils.interpolate(60, 100, progress)}% ${gsap.utils.interpolate(75, 100, progress)}%,
              ${gsap.utils.interpolate(40, 0, progress)}% ${gsap.utils.interpolate(75, 100, progress)}%
            )`,
          });
        },
      }, i);

      // Анимация текста
      if (textItem) {
        // Предыдущий текст уезжает вверх
        if (i > 0) {
          const previousTextItem = textItems[i - 1];
          if (previousTextItem) {
            tl.to(previousTextItem, { top: "0%", opacity: 0, duration: 0.5 }, i);
          }
        }

        // Текущий текст появляется в центре
        tl.fromTo(
          textItem,
          {opacity: 0 },
          {opacity: 1},
          i
        );
      }
    }
  }
}

// Запускаем функцию после загрузки DOM
document.addEventListener("DOMContentLoaded", (event) => {
  if (window.matchMedia('(min-width: 641px)').matches) {
    zentryScroll();
  }
});
