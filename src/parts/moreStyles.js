//moreStyles
function moreStyles() {
  let wrap = document.querySelector("#styles"),
  cards = wrap.querySelectorAll(".styles-2"),
  btn = wrap.querySelector("button");
  cards.forEach((card) => {
    card.classList.add("animated");
    card.classList.add("fadeInUp");
  });
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