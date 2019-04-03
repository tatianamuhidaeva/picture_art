//accordion
function accordion() {
  let btns = document.querySelectorAll(".accordion-heading"),
   blocks = document.querySelectorAll(".accordion-block");
   blocks.forEach((block)=>{
    block.classList.add("animated"); 
    block.classList.add("fadeInDown");
   });
   btns.forEach((btn)=> {
     btn.addEventListener("click", function () {
      if (!this.classList.contains("active")) {
        btns.forEach((btn)=> {
          btn.classList.remove("active")
          btn.classList.remove("active-style");
        });
        this.classList.add("active"); 
        this.classList.add("active-style");
      }
  });
});
}
module.exports = accordion;