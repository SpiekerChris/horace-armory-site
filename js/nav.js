(function () {
  var button = document.querySelector(".nav-button");
  var nav = document.getElementById("site-nav");
  if (!button || !nav) return;

  var desktop = window.matchMedia("(min-width: 960px)");

  function closeMenu() {
    nav.classList.remove("is-open");
    if (!desktop.matches) button.setAttribute("aria-expanded", "false");
  }

  function sync() {
    if (desktop.matches) {
      nav.classList.remove("is-open");
      button.setAttribute("aria-expanded", "true");
    } else if (!nav.classList.contains("is-open")) {
      button.setAttribute("aria-expanded", "false");
    }
  }

  button.addEventListener("click", function () {
    if (desktop.matches) return;
    var open = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });

  if (typeof desktop.addEventListener === "function") {
    desktop.addEventListener("change", sync);
  } else if (typeof desktop.addListener === "function") {
    desktop.addListener(sync);
  }

  sync();
})();
