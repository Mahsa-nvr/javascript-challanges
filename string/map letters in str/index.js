// Define a function that takes a string as a parameter
function mapLetters(word) {
    // Create an empty object to store the result
    let result = {};
    // Loop through each character of the word
    for (let i = 0; i < word.length; i++) {
    // Get the current character
    let char = word[i];
    // Convert the character to a symbol using Symbol.for
    let symbol = Symbol.for(char);
    // If the symbol is not already in the result object
    if (!result[symbol]) {
    // Create an empty array as the value for the symbol key
    result[symbol] = [];
    }
    // Push the current index to the array
    result[symbol].push(i);
    }
    // Return the result object
    return result;
    }