// 		split-text

// Project setup
gsap.registerPlugin( SplitText)

let animDuration = 0.73;
let animStart = 'top 90%';
let toggleAction = 'restart reverse restart reverse';

// Split text usage

let split = document.querySelectorAll( '.split_text' );
let text = new SplitText( split , { type: 'words' } )
let words = text.words;

gsap.from( words, {
  yPercent: 100,
  stagger: 0.073,
  opacity: 0,
  ease: 'cubic-bezier( .56 , .52 , .53 , 1.25 )',
  duration: animDuration,

  scrollTrigger: {
    trigger: split,
    start: animStart,
    toggleActions: toggleAction,
    // markers: true
  }
});

if(window.matchMedia("(max-width: 640px)").matches ){
  // 		split-text
  let animDuration = 0.5;
  let animStart = 'top 90%';
  let toggleAction = 'restart reverse restart reverse';

// Выбираем все карточки
  let cards = document.querySelectorAll('.image-text__card_content');

// Проходим по каждой карточке
  cards.forEach(card => {
    // Применяем SplitText к тексту внутри текущей карточки
    let text = new SplitText(card, { type: 'words' });
    let words = text.words;

    // Создаем анимацию для слов внутри текущей карточки
    gsap.from(words, {
      yPercent: 100,
      stagger: 0.073,
      opacity: 0,
      ease: 'cubic-bezier(.56, .52, .53, 1.25)',
      duration: animDuration,

      scrollTrigger: {
        trigger: card, // Указываем текущую карточку как триггер
        start: animStart,
        toggleActions: 'play',
        //markers: true // Раскомментируйте для отладки
      }
    });
  });
}
