console.log("Webpack is working!");

const MovingObject = require("./moving_object");
const Asteroid = require("./asteroid");

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext("2d");
  const mo = new MovingObject(
    { pos: [30, 30], vel: [10, 10], radius: 20, color: "#00FF00" }
  );

  ast = new Asteroid({ pos: [100, 100] });
  ast.draw(ctx);
  mo.draw(ctx);
  mo.move();
});