//filterPhoto
function filterPhoto() {
  let menu = document.querySelector(".portfolio-menu"),
    items = menu.querySelectorAll("li"),
    btnAll = menu.querySelector(".all"),
    btnLovers = menu.querySelector(".lovers"),
    btnChef = menu.querySelector(".chef"),
    btnGirl = menu.querySelector(".girl"),
    btnGuy = menu.querySelector(".guy"),
    btnGrandmother = menu.querySelector(".grandmother"),
    btnGranddad = menu.querySelector(".granddad"),
    wrapper = document.querySelector(".portfolio-wrapper"),
    markAll = wrapper.querySelectorAll(".all"),
    markGirl = wrapper.querySelectorAll(".girl"),
    markLovers = wrapper.querySelectorAll(".lovers"),
    markChef = wrapper.querySelectorAll(".chef"),
    markGuy = wrapper.querySelectorAll(".guy"),
    no = document.querySelector(".portfolio-no");

  function filter(markType) {
    markAll.forEach((mark) => {
      mark.style.display = "none";
      mark.classList.remove("animated");
      mark.classList.remove("fadeIn");
    });
    no.style.display = "none";
    no.classList.remove("animated");
    no.classList.remove("fadeIn");
    if (markType != null){
      markType.forEach((mark) => {
        mark.style.display = "block";
        mark.classList.add("animated");
        mark.classList.add("fadeIn");
      });
    } else { 
      no.style.display = "block";
      no.classList.add("animated");
      no.classList.add("fadeIn");
    }
  }

  menu.addEventListener('click', function (event) {
    let target = event.target;
    if(target && target.tagName == "LI"){
      items.forEach((btn) => btn.classList.remove('active'));
      target.classList.add('active');
    };
  });

  btnAll.addEventListener("click", function () {
    markAll.forEach((mark) => {
      mark.style.display = "block";
      mark.classList.add("animated");
      mark.classList.add("fadeIn");
    });
  });
  btnLovers.addEventListener("click", function () {
    filter(markLovers);
  });
  btnChef.addEventListener("click", function () {
    filter(markChef);
  });
  btnGirl.addEventListener("click", function () {
    filter(markGirl);
  });
  btnGuy.addEventListener("click", function () {
    filter(markGuy);
  });
  btnGrandmother.addEventListener("click", function () {
    filter();
  });
  btnGranddad.addEventListener("click", function () {
    filter();
  });
}
module.exports = filterPhoto;