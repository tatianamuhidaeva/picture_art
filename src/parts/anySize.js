//anySize
function anySize() {
  let blocks = document.querySelectorAll(".sizes-block");

  function withPic(block) {
    let img = block.querySelector('img');
    img.src = img.src.slice(0, -4) + "-1.png";
  }

  function withoutPic(block) {

    let img = block.querySelector('img');
    img.src = img.src.slice(0, -6) + ".png";
  }
  blocks.forEach((block) => {
    if (screen.width < 768) {
      block.addEventListener('click', function () {
        withPic(block);
      });
      document.addEventListener("click", function (e) {
        if (e.target.closest(".block") === null) {
          withoutPic(block);
        }
      });

    } else {
      block.addEventListener('mouseover', function () {
        withPic(block);
      });
      block.addEventListener('mouseout', function () {
        withoutPic(block);
      });
    }
  });
}
module.exports = anySize;