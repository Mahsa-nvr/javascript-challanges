const wordToBoolArray = require('./index');

describe("wordToBoolArray", () => {
    //test that function returns an array of boolean values
    test("returns an array of boolean values", () => {
        //expect thet the function return array
        expect(Array.isArray(wordToBoolArray("deep"))).toBe(true);
        //expect that array contains boolean values
        expect(wordToBoolArray("deep").every((element) => typeof element === "boolean")).toBe(true)
    
        // Test that the function converts a word to a bitstring and then to a boolean array based on the criteria
    test("converts a word to a bitstring and then to a boolean array based on the criteria", () => {
    // Expect that the function returns the correct boolean array for some examples
    expect(wordToBoolArray("deep")).toEqual([false, true, true, false]);
    expect(wordToBoolArray("loves")).toEqual([true, false, true, false, true]);
    expect(wordToBoolArray("tesh")).toEqual([true, true, false, true]);
    })
})
})