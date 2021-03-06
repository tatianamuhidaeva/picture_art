//feedbackSlider
function feedbackSlider() {
  let slideIndex = 1,
    items = document.querySelectorAll(".feedback-slider-item"),
    prev = document.querySelector(".main-prev-btn"),
    next = document.querySelector(".main-next-btn");

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = items.length;
    }
    items.forEach((item) => {
      item.classList.add("animated");
      item.style.display = "none";
    });
    items[slideIndex - 1].style.display = "block";
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  showSlides(slideIndex);

  prev.addEventListener("click", function () {
      plusSlides(-1);
      items[slideIndex - 1].classList.remove("slideInLeft");
      items[slideIndex - 1].classList.add("slideInRight");
    }),
    next.addEventListener("click", function () {
      plusSlides(1);
      items[slideIndex - 1].classList.remove("slideInRight");
      items[slideIndex - 1].classList.add("slideInLeft");
    }),
    setInterval(function () {
      plusSlides(1);
      items[slideIndex - 1].classList.remove("slideInRight");
      items[slideIndex - 1].classList.add("slideInLeft");
    }, 5000);
}
module.exports = feedbackSlider;