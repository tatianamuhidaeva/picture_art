//popupConsultation
function popupConsultation() {
  let btns = document.querySelectorAll(".button-consultation"),
    popup = document.querySelector(".popup-consultation"),
    popupDesign = document.querySelector(".popup-design"),
    popupGift = document.querySelector(".popup-gift"),
    close = popup.querySelector(".popup-close");

  popup.classList.add('animated');
  popup.classList.add('fadeIn');

  function openPopup() {
    popup.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closePopup() {
    popup.style.display = "none";
    document.body.style.overflow = "";
  }

  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      openPopup();
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
  let timer = setTimeout(function () {
    var cons = getComputedStyle(popup).display,
      des = getComputedStyle(popupDesign).display,
      gift = getComputedStyle(popupGift).display;
    if (cons == "none" && des == "none" && gift == "none") {
      openPopup();
    }
  }, 60000);
}
module.exports = popupConsultation;