import Perlin from "./perlin.js";

const dots = 30;
const size = 600;
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.setAttribute("id", "canvas");
canvas.width = size;
canvas.height = size;
const root = document.querySelector("#root");
root.appendChild(canvas);

function draw() {
  ctx.clearRect(0, 0, size, size);

  for (let i = 0; i < 50; i++) {
    ctx.beginPath();
    for (let j = 0; j < dots; j++) {
      ctx.lineTo(
        j * 20,
        i * 10 + 100 * Perlin((100 * j) / size, i / 10, time / 100)
      );
    }
    ctx.stroke();
  }
}

let time = 0;
function render() {
  draw();
  time++;
  window.requestAnimationFrame(render);
}
render();
