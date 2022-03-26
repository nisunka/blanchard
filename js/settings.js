// код не попадает в глобальную область видимости, но нам нужна в глоб.обл.вид. ф-ия debounce, поэтому добавляем wondows. А вообще, debounce для того, чтобы не сломать допустим миллионами нажатиями бургер меню
(() => {
  const MOBILE_WIDTH = 580;
  const TABLET_WIDTH = 1280;

  function debounce(f, ms) {

    let isCooldown = false;

    return function() {
      if (isCooldown) return;

      f.apply(this, arguments);

      isCooldown = true;

      setTimeout(() => isCooldown = false, ms);
    };

  }

  function getWindowWidth () {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  //имитация js модулей
  window.MOBILE_WIDTH = MOBILE_WIDTH;
  window.TABLET_WIDTH = TABLET_WIDTH;
  window.debounce = debounce;
  window.getWindowWidth = getWindowWidth;
})();

// функция debounce принимает саму функцию, которая будет применяться и то время, на которое будет выполняться. То есть, если пользователь кликает быстрее чем раз в 500ms, то будет отрабатываться функция раз в 500ms
