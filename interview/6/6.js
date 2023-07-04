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



//The bigO of this code is O(n log n), where n is the length of the longer string. This is because the code performs a replace operation, which is O(n), and a sort operation, which is O(n log n), for each string. The replace operation is O(n) because it loops through all the characters of the string and replaces any non-alphabetic characters with an empty string. The sort operation is O(n log n) because it uses a comparison-based sorting algorithm, such as merge sort or quick sort, to sort the characters of the string alphabetically. The comparison of the sorted strings is O(1) because it is a simple equality check. The overall time complexity of the code is dominated by the sort operation, which is O(n log n).