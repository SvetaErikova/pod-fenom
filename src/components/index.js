

const splitContainers = document.querySelectorAll('.js-split-text');

// Проходимся по каждому контейнеру
splitContainers.forEach(container => {
  // Находим все <p> внутри контейнера
  const paragraphs = container.querySelectorAll('p');
  paragraphs.forEach(p => {
    // Инициализируем SplitText для текущего <p>
    const splitText = new SplitText(p, {
      type: 'lines', // Разбиваем по строкам
      linesClass: 'split-line' // Добавляем класс к каждой строке (опционально)
    });
    // Добавляем каждой строке атрибут data-split-text
    splitText.lines.forEach((line, index) => {
      line.setAttribute('data-split-text', `line-${index + 1}`);
    });
  });
});

// Функция для запуска анимации
const splitTextElements = document.querySelectorAll("[data-split-text]");
// Проходимся по каждому элементу и применяем анимацию
splitTextElements.forEach((element) => {
  // Анимация для span внутри элемента
  gsap.from(element, {
    duration: 1,
    y: "100%", // Поднимаем текст снизу
    opacity: 0, // Начальная прозрачность
    stagger: 0.1, // Задержка между анимациями span
    ease: "power4.out",
    scrollTrigger: {
      trigger: element, // Элемент, который запускает анимацию
      start: "top 80%", // Анимация начнется, когда верх элемента достигнет 80% viewport
      end: "bottom 20%", // Анимация закончится, когда низ элемента достигнет 20% viewport
      toggleActions: "play none none reverse"
    },
  });
});
