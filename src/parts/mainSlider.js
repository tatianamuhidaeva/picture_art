//SLIDER
function mainSlider() {
   let slideIndex = 1,
      slides = document.querySelectorAll('.main-slider-item');


   function showSlides(n) {
      if (n > slides.length) {
         slideIndex = 1;
      }
      slides.forEach((item) => {
         item.style.display = 'none';
      });
      slides[slideIndex - 1].style.display = 'block';      
   }

   showSlides(slideIndex);
      setInterval(function () {
         showSlides(slideIndex +=1);
         slides[slideIndex - 1].classList.add('animated');
         slides[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
}
module.exports = mainSlider;