// Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

// findBrokenKeys(correct phrase, what you actually typed)
// findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]
// Notes
// Broken keys should be ordered by when they first appear in the sentence.
// Only one broken key per letter should be listed.
// Letters will all be in lower case.

function findBrokenKeys(correct, typed) {
    let brokenKeys = new Set();
    for (let i=0; i<correct.length; i++) {
        if(correct[i] !== typed[i]) {
            brokenKeys.add(correct[i])
        }
    }
    return [...brokenKeys]
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday"))