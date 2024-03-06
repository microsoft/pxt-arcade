const bg = document.getElementById("diagonalHatch")

let start = Date.now();

function doAnimation() {
  bg.setAttribute("x", ((Date.now() - start) / 20));

  requestAnimationFrame(doAnimation)
}

doAnimation()