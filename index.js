//Question 1: Scaling random numbers

// write a function randomInRange(a,b)
// that returns a random number between a and b inclusive
//
// note: Math.random() returns a float between 0 and 1

function randomInRange(a, b) {
    var max = Math.max(a, b);
    var min = Math.min(a, b);
    return Math.random() * (max - min) + min;
}

var x = randomInRange(5, 100)
console.assert(x >= 5 && x <= 100)
var y = randomInRange(-25, 30)
console.assert(y >= -25 && y <= 30)


//Question 2: Letter Counting

// Write a function letterCount() that takes a
// string and returns an object with the count
// of each letter that is in the string.
//
// An example:
//
// letterCount("hello world")
//
// --> {
//      h: 1,
//      e: 1,
//      l: 3,
//      o: 2,
//      w: 1,
//      r: 1,
//      d: 1
// }
//
// Note that the space is not counted. All
// letters should also be converted to lower
// case when counting them.

function letterCount(str) {
  if (typeof str === 'undefined') {
    return {};
  } else {
    var counts = {};
    for (var i = 0; i < str.length; i++) {
        var currentLetter = str[i];
        if (counts [currentLetter]) { //if seen before
            counts [currentLetter] = counts [currentLetter] + 1;
        } else { //seen for first time
            counts [currentLetter] = 1;
        }
      }
    }
    return counts;
}

console.log(letterCount("jaksdhfjafdsjkhjwae"));

    console.assert(letterCount("abcabcabcdefab c a oo ija ;a ;skmdals kn").b === 4)
    console.assert(letterCount().z === undefined)
