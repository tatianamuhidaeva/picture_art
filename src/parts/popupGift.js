//popupGift
function popupGift() {
  let gift = document.querySelector(".fixed-gift"),
    popup = document.querySelector(".popup-gift"),
    close = popup.querySelector(".popup-close");

  popup.classList.add('animated');
  popup.classList.add('fadeIn');

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

  window.onscroll = function () {
    // if (window.offsetHeight + window.scrollTop >= window.scrollHeight) {
      
      //   popup.style.display = "block";
      //   gift.style.display = "none";
      //   document.body.style.overflow = "hidden";
      // }
      
      var maxScroll = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
      if ((maxScroll<=window.scrollY + 1) && (window.scrollY + 1 >= n - innerHeight)){
        console.log("[f");
        //   t.style.display = "block"; 
    //   e.style.display = "none";
    };
  };
}
module.exports = popupGift;