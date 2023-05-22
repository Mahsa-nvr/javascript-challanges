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