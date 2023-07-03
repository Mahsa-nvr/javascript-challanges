// Mubashir was reading about currying functions. He needs your help to multiply an array of numbers using currying functions.

// Create a function which takes an array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Examples
// multiply([1, 2, 3])(2) ➞ [2, 4, 6]

// multiply([4, 6, 5])(10) ➞ [40, 60, 50]

// multiply([1, 2, 3])(0) ➞ [0, 0, 0]
// Notes
// Your function must be called multiply.

///////////////curring function 

////////////////////////////////////first solution 
// function multiply(arr) {
//     return function factor(x) {
//         console.log(arr.map(e => e*x))
//     }
// }

///////////////////////////////////second solution 
 multiply = arr => x => arr.map(e => e*x)

multiply([1, 2, 3])(2) 