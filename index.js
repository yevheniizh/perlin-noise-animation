import Perlin from "./js/perlin.js";

console.log(Perlin(0.01, 1, 0));

const size = 600;
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.setAttribute("id", "canvas");
canvas.width = size;
canvas.height = size;

const root = document.querySelector("#root");
root.appendChild(canvas);

let time = 0;
function draw() {
  ctx.clearRect(0, 0, size, size);
  // ctx.fillRect(100 * Math.random(), 100, 10, 10);

  /* MOVING DEPENDS ON TIME */
  // ctx.fillRect(600 * Perlin(time / 100, 0, 0), 200, 10, 10);

  const dots = 100;
  let x, y;
  const radius = 100;
  ctx.save();
  ctx.translate(size / 2, size / 2);
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  for (let i = 0; i < dots; i++) {
    /* MOVING DEPENDS ON TIME & PREVIOUS ELEMENT */
    // ctx.fillRect(i, 0, 1, 200 * Perlin(time / 100, i / 100, 0));

    let angle = i * ((2 * Math.PI) / dots);
    x = radius * Math.sin(angle) + 40 * Perlin(Math.sin(angle), time / 100, 0);
    y = radius * Math.cos(angle) + 40 * Perlin(Math.cos(angle), time / 100, 0);
    // ctx.fillRect(x, y, 1, 1);
    ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = "#FF0000";
  ctx.beginPath();
  for (let i = 0; i < dots; i++) {
    /* MOVING DEPENDS ON TIME & PREVIOUS ELEMENT */
    // ctx.fillRect(i, 0, 1, 200 * Perlin(time / 100, i / 100, 0));

    let angle = i * ((2 * Math.PI) / dots);
    x =
      radius * Math.sin(angle) +
      40 * Perlin(Math.sin(angle) + time / 100, time / 100, 0);
    y =
      radius * Math.cos(angle) +
      40 * Perlin(Math.cos(angle) + time / 100, time / 100, 0);
    // ctx.fillRect(x, y, 1, 1);
    ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}

function render() {
  draw();
  time++;
  window.requestAnimationFrame(render);
}
render();
