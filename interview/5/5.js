// The Fizz Buzz Test
// Write a method that returns array of all the numbers from 1 to an integer argument. But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.

// Example
// fizzBuzz(10) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]

// fizzBuzz(15) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
// Notes
// Make sure to return an array.

function fizzBuzz(a) {
    let result = " ";
    for ( let i= 1 ; i <= a ; i++) {
        if ( i%3 === 0 & i%5===0) {
            result += "fizzBuzz,";
        }else if (i%3 === 0) {
            result += 'fizz,';
        }else if (i%5 === 0) {
            result += "buzz,"
        }
        else {result += i + ","}
    }
    result = result.slice(0, -1);
    result = result.split(",");
    console.log(result)
}

fizzBuzz(15)

//// for this be careful we can use Array but array get more memory campare to 
//// string and bigO is O(n) in both of them 