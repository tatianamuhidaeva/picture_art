//filterPhoto
function filterPhoto() {
  let e = document.querySelector(".portfolio-menu"), t = e.getElementsByTagName("li"), n = e.querySelector(".all"), l = e.querySelector(".lovers"), o = e.querySelector(".chef"), s = e.querySelector(".girl"), a = e.querySelector(".guy"), i = e.querySelector(".grandmother"), r = e.querySelector(".granddad"), u = document.querySelector(".portfolio-wrapper"), c = u.getElementsByClassName("all"), d = u.getElementsByClassName("girl"), y = u.getElementsByClassName("lovers"), f = u.getElementsByClassName("chef"), v = u.getElementsByClassName("guy"), p = document.querySelector(".portfolio-no")
  for (m = function (e) {
    t[e].addEventListener("click", function () {
      for (var n = 0; n < t.length; n++) t[n].classList.remove("active");
      t[e].classList.add("active")
    })
  }, g = 0; g < t.length; g++) m(g);
n.addEventListener("click", function () {
  for (var e = 0; e < c.length; e++) c[e].style.display = "block"
}), l.addEventListener("click", function () {
  for (var e = 0; e < c.length; e++) c[e].style.display = "none";
  for (var t = 0; t < y.length; t++) y[t].style.display = "block"
}), o.addEventListener("click", function () {
  for (var e = 0; e < c.length; e++) c[e].style.display = "none";
  for (var t = 0; t < y.length; t++) f[t].style.display = "block"
}), s.addEventListener("click", function () {
  for (var e = 0; e < c.length; e++) c[e].style.display = "none";
  for (var t = 0; t < y.length; t++) d[t].style.display = "block"
}), a.addEventListener("click", function () {
  for (var e = 0; e < c.length; e++) c[e].style.display = "none";
  for (var t = 0; t < y.length; t++) v[t].style.display = "block"
}), i.addEventListener("click", function () {
  for (var e = 0; e < c.length; e++) c[e].style.display = "none";
  p.style.display = "block"
}), r.addEventListener("click", function () {
  for (var e = 0; e < c.length; e++) c[e].style.display = "none";
  p.style.display = "block"
})
}
module.exports = filterPhoto;