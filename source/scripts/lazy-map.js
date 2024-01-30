document.addEventListener("click", initYandexMapOnEvent);
document.addEventListener("mouseover", initYandexMapOnEvent);
document.addEventListener("touchstart", initYandexMapOnEvent);
document.addEventListener("touchmove", initYandexMapOnEvent);

function initYandexMapOnEvent(e) {
  initYandexMap();
  e.currentTarget.removeEventListener(e.type, initYandexMapOnEvent);
}

function initYandexMap() {
  if (window.yandexMapDidInit) {
    return false;
  }
  window.yandexMapDidInit = true;

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;

  script.src =
    "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab8c638adddde6ab8fbecc1f8fd137c080812e3fe518271e3a719d6a4b3e6b19d&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true";

  document.getElementById("map_container").appendChild(script);
}
