const randomString = require('random-string');


module.exports = { randomStringId };

function randomStringId() {
  return randomString({ length: 5 });
}