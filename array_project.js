/* Part 1 - Do I Know Really Arrays? */

/* Program A */
// Output:
// B
// D
// undefined

/* Program B */
// Output:
// Mon
// Sun
// 7
// undefined
// Sun

/* Program C */
// Output:
// [ 'Do', 'Re', 'Mi', 'Fa', 'So' ]
// [ 'Do', 'Re' ]
// []

/*~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Part 2 - Average Score */
let scores = [85, 93, 65, 65, 92, 81, 93];

// Method One
let average =
  (scores[0] +
    scores[1] +
    scores[2] +
    scores[3] +
    scores[4] +
    scores[5] +
    scores[6]) /
  scores.length;

console.log(average);

// Method Two
// (If They Look Into The Reduce Method)
let avg = scores.reduce((a, b) => a + b) / scores.length;
console.log(avg);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Part 3 - Array Transformation */

let myArray = ['a', 'b', 'c', 'd'];
// Using .slice() to keep a copy of myArray.
// The student does not need to know this, though this could
// be a great learning opportunity that
// let reverse = myArray;
// will only create a reference to myArray instead of creating
// a new separate copy of the array

/*....................................*/
/* Transformation #1: */
let reverse = myArray.slice();

reverse.reverse();
// Or:
// myArray.reverse();

console.log('Before: ', myArray);
console.log('After:  ', reverse);

/*....................................*/
/* Transformation #2: */
let addOneTwo = myArray.slice();

addOneTwo.push(1, 2);
// Or:
// myArray.push(1);
// myArray.push(2);

console.log('Before: ', myArray);
console.log('After:  ', addOneTwo);

/*....................................*/
/* Transformation #3: */
let byeDee = myArray.slice();
byeDee.pop();
// Or:
// myArray.pop();

console.log('Before: ', myArray);
console.log('After:  ', byeDee);

/*....................................*/
/* Transformation #4: */
let splicePush = myArray.slice();

// Remove 'b'
splicePush.splice(1, 1);
// Add 'e'
splicePush.push('e');

console.log('Before: ', myArray);
console.log('After:  ', splicePush);

/*....................................*/
/* Transformation #5: */
// Method One - Push
let popPushReverse = myArray.slice();

// Get rid of 'd'
popPushReverse.pop();
// Add 'e' and 'f' to the end
popPushReverse.push('e', 'f');
// Reverse Array
popPushReverse.reverse();

console.log('Before: ', myArray);
console.log('After:  ', popPushReverse);

// Method Two - Unshift
let popReverseUnshift = myArray.slice();

// Get rid of 'd'
popReverseUnshift.pop();
// Reverse Array
popReverseUnshift.reverse();
// Add 'f' and 'e' to the beginning
popReverseUnshift.unshift('f', 'e');

console.log('Before: ', myArray);
console.log('After:  ', popReverseUnshift);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Extra Credit - So Many Arrays @.@ */

// Task #1:
// myArray[3]

// Task #2:
// myArray[3][1]
