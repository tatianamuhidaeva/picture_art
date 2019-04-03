//popupGift
function popupGift() {
  let gift = document.querySelector(".fixed-gift"),
    popup = document.querySelector(".popup-gift"),
    close = popup.querySelector(".popup-close");

  function closePopup() {
    popup.style.display = "none";
    document.body.style.overflow = "";
    gift.style.display = "block";

  }

    gift.addEventListener("click", function () {
      popup.style.display = "block";
      gift.style.display = "none";
      document.body.style.overflow = "hidden";
    });
  
  close.addEventListener("click", function () {
    closePopup();
  })
  popup.addEventListener("click", function (e) {
    if (e.target.closest(".popup-dialog, .popup_close") === null) {
      closePopup();
    }
  });
}
module.exports = popupGift;