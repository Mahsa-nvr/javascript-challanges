// Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.

// Examples
// isAnagram("cristian", "Cristina") ➞ true

// isAnagram("Dave Barry", "Ray Adverb") ➞ true

// isAnagram("Nope", "Note") ➞ false
// Notes
// Should be case insensitive.
// The two given strings can be of different lengths.

function isAnagram(str1, str2) {
str1 = str1.toLowerCase();
str2 = str2.toLowerCase();
str1 = str1.replace(/[^a-z]/g, "");
str2 = str2.replace(/[^a-z]/g, "");
// Sort the characters of the strings alphabetically
str1 = str1.split("").sort().join("");
str2 = str2.split("").sort().join("");
// Compare the sorted strings and return true or false
return str1 === str2;
}