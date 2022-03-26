ymaps.ready(init);
function init() {

  var myMap = new ymaps.Map("map", {

    center: [55.758468, 37.601088],
    zoom: 15,
    controls: ['geolocationControl', 'zoomControl']
  }, {
    suppressMapOpenBlock: true,
    geolocationControlSize: "large",
    geolocationControlPosition:  { top: "352px", right: "20px" },
    geolocationControlFloat: 'none',
    zoomControlSize: "small",
    zoomControlFloat: "none",
    zoomControlPosition: { top: "260px", right: "20px" }
  }
  );

  myMap.behaviors.disable('scrollZoom');

  // Создание геообъекта с типом точка (метка).
  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-point.svg',
    iconImageSize: [20, 20],
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}
