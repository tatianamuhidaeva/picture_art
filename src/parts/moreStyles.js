//moreStyles
function moreStyles() {
  var wrap = document.querySelector("#styles"),
  cards = wrap.querySelectorAll(".styles-2"),
  btn = wrap.querySelector("button");

  btn.addEventListener("click", function () {
    cards.forEach((card) => {
      card.classList.toggle("hidden-lg");
      card.classList.toggle("hidden-md");
      card.classList.toggle("hidden-sm");
      card.classList.toggle("hidden-xs");
      card.classList.toggle("col-sm-3");
      card.classList.toggle("col-sm-offset-0");
      card.classList.toggle("col-xs-10");
      card.classList.toggle("col-xs-offset-1");
    })
    btn.style.display = "none";
})
}
module.exports = moreStyles;