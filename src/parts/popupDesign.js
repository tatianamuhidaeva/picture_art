//popupDesign
function popupDesign() {
  let btns = document.querySelectorAll(".button-design"),
    popup = document.querySelector(".popup-design"),
    close = popup.querySelector(".popup-close");

  popup.classList.add('animated');
  popup.classList.add('fadeIn');

  function closePopup() {
    popup.style.display = "none";
    document.body.style.overflow = "";
  }

  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      popup.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  });
  close.addEventListener("click", function () {
    closePopup();
  })
  popup.addEventListener("click", function (e) {
    if (e.target.closest(".popup-content, .popup_close") === null) {
      closePopup();
    }
  });
}
module.exports = popupDesign;