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
    if (!parentsOfElements(e.target, "popup-content") &&
    !e.target.classList.contains("popup_close")) {
      closePopup();
    }
  });
}
module.exports = popupDesign;