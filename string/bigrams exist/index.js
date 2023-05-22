// You are given an input array of bigrams, and an array of words.

// Write a function that returns true if every single bigram from this array can be found at least once in an array of words.

// canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]) ➞ true

// canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) ➞ false
// # "cu" does not exist in any of the words.
// Notes
// A bigram is string of two consecutive characters in the same word.
// If the array of words is empty, return false.

function canFind(bigrams, words) {
    if(!bigrams.length) return false
   return  bigrams.every(el => {
       return  words.some(word => word.includes(el))
    })
}

console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]))