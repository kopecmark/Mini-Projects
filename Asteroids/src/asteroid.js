const MovingObject = require("./moving_object");
const Util = require("./util");

const DEFAULT = { COLOR: "#949392", RADIUS: 40, SPEED: 4};

function Asteroid(options) {
  options = options || {};
  options.color = DEFAULT.COLOR;
  options.radius = DEFAULT.RADIUS;
  options.vel = options.vel || Util.randomVec(DEFAULT.SPEED);
  options.pos = options.pos;
  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;