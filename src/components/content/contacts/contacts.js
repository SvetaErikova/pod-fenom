let map_contacts = document.getElementById('map')
if(map_contacts){
  ymaps = window.ymaps;
  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
      center: [59.935791, 30.352367],
      zoom: 15,
      controls: ['zoomControl'],
    });

    myMap.geoObjects
      .add(new ymaps.Placemark([59.935574, 30.352259], {
        balloonContent: 'Под щитом',
        hintContent: 'Под щитом'
      },
        {
        iconLayout: 'default#imageWithContent',
        iconImageHref: './assets/img/logo-mini.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-12, -12],
      }
      ))

    myMap.behaviors.disable('scrollZoom')
    if ( window.matchMedia("(max-width: 768px)").matches ) {
      myMap.behaviors
        .disable('drag')
        .enable('multiTouch');
    }
  }

}
