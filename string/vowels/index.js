function findVowels(str) {
//     Given a sentence as str, return true if any two adjacent words have this property: One word ends with a vowel, while the word immediately after begins with a vowel (a e i o u).

// Examples
// vowelLinks("a very large appliance") ➞ true

// vowelLinks("go to edabit") ➞ true

// vowelLinks("an open fire") ➞ false

// vowelLinks("a sudden applause") ➞ false
    
    
    
    let words = str.split(" ");
    for( let i=0; i < words.length - 1 ; i++) {
        
        let firstWord = words[i+1].charAt(0).toLowerCase()
        let lastWord = words[i].slice(-1).toLowerCase()
        
        if("aeiou".includes(firstWord)  && "aeiou".includes(lastWord)){
            return true
        }else{
            return false
        }
    }
}

console.log(findVowels("hello ay book"))