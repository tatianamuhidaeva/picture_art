//burger
function burger() {
  let menu = document.querySelector(".burger-menu"),
    burger = document.querySelector(".burger");
  burger.style.display = "none";

  function menuAdapt() {
    if (screen.width < 769) {
      menu.style.display = "none";
      burger.style.display = "block";
    }
  }
  menuAdapt();
  burger.addEventListener("click", function () {
    if (menu.style.display == "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });
  window.addEventListener('resize', function () {
    if (screen.width < 769) {
      burger.style.display = "block";
    } else {
      menu.style.display = "none";
      burger.style.display = "none";
    }
  });
}
module.exports = burger;