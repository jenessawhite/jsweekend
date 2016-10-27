
// write a function randomInRange(a,b)
// that returns a random number between a and b inclusive
//
// note: Math.random() returns a float between 0 and 1

function randomInRange(a,b) {
  var max = Math.max(a, b);
  var min = Math.min(a, b);
    return Math.random() * (max - min) + min;
}

var x = randomInRange(5,100)
console.assert(x >= 5 && x <= 100)
var y = randomInRange(-25,30)
console.assert(y >= -25 && y <= 30)
