const a = require("../factorial/index");
const b = require("../ratio/index");
const ratioAndFactorial = (x, y, z) => {
  return {
    ratio: b(x, y),
    factorial: a(z),
  };
};
module.exports = ratioAndFactorial;
