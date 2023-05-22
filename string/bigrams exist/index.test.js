const canFind = require('./index')

describe('canFind', () => {
    //should return true if every biagrom is included
    test('should return true if every bigram can be found in some word', () => {
        //define the input array 
        let bigrams = ['at', 'be', 'th', 'au'];
        let words = ['beautiful', 'the', 'hat'];
        //define the expected output
        output = true;
        //call the function input 
        let actual = canFind(bigrams, words)
        //test with the expected result
        expect(actual).toBe(output)
    
    })

    test('should return false if function can not find words in biagram', () => {
        //define input array 
        let bigrams = ['bo', 'ta', 'el', 'st'];
        let words = ['books', 'table', 'cap', 'hostel'];
        //define expected output
        output = false;
        //call the function 
        let actual = canFind(bigrams, words)
        expect(actual).toBe(output)
    })

    test('if the array is empty it must be return false', () => {
        //define arrays
        let bigrams = ['la', 'te'];
        let words = [];
        //define expected output
        let output = false
        //define function 
        let actual = canFind(bigrams, words)
        expect(actual).toBe(output)
    })
})