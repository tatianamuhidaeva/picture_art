//popupGift
function popupGift() {
  let gift = document.querySelector(".fixed-gift"),
    popup = document.querySelector(".popup-gift"),
    close = popup.querySelector(".popup-close");
  let pressedBtn = false,
    btns = document.querySelectorAll(".button-design, .button-consultation, .fixed-gift");


  popup.classList.add('animated');
  popup.classList.add('fadeIn');

  function closePopup() {
    popup.style.display = "none";
    document.body.style.overflow = "";
  }

  function openPopup() {
    pressedBtn = true;
    popup.style.display = "block";
    gift.style.display = "none";
    document.body.style.overflow = "hidden";
  }

  function parentsOfElements(elem, cl){
    let curr = elem;
    while (curr != null){
      if (curr.classList.contains(cl)){
        return true;
      }
      curr = curr.parentElement;
    }
    return false;
  }

  gift.addEventListener("click", function () {
    openPopup();
  });

  close.addEventListener("click", function () {
    closePopup();
  })
  popup.addEventListener("click", function (e) {
    if (!parentsOfElements(e.target, "popup-content") &&
    !e.target.classList.contains("popup_close")) {
      closePopup();
    }
  });

  btns.forEach((btn) => {
    btn.addEventListener('click', function () {
      pressedBtn = true;
    })
  });
  window.onscroll = function () {
    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    if (!pressedBtn && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
      openPopup();
    }
  };
}
module.exports = popupGift;