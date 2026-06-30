document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var drawer = document.querySelector('.mobile-drawer');
  var close = document.querySelector('.mobile-drawer .close');
  if (toggle && drawer) {
    toggle.addEventListener('click', function () { drawer.classList.add('open'); });
  }
  if (close && drawer) {
    close.addEventListener('click', function () { drawer.classList.remove('open'); });
  }
  if (drawer) {
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { drawer.classList.remove('open'); });
    });
  }
});
