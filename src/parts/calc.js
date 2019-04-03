//calc
function calc() {
  var size = document.getElementById("size"),
  material = document.getElementById("material"),
  options = document.getElementById("options"),
  promocode = document.getElementsByClassName("promocode")[0],
    res = document.getElementsByClassName("calc-price ")[0],
    s = 0;

  function calcFunc(){
    s = Math.round((+size.value) * (+material.value) + (+options.value));
    if (size.value == "" || material.value == "") {
      res.innerHTML = "Пожалуйста, выберите размер и материал картины"
    } else if (promocode.value == "IWANTPOPART" ) {
      res.innerHTML = s - .3 * s;
    } else {
      res.innerHTML = s;
    }
  }
  size.addEventListener("change", calcFunc);
  material.addEventListener("change", calcFunc);
  options.addEventListener("change", calcFunc);
  promocode.addEventListener("input", calcFunc);
  
}
module.exports = calc;