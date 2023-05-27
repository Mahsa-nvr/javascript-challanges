
const findVowels = require('./index')
describe('findVowels', () => {

    test('if the first letter of second word and the letter of first word function return true', ()=> {
      expect(findVowels("a very large appliance")).toBe(true);
      expect(findVowels("go away")).toBe(true);
      expect(findVowels("Please enter")).toBe(true);
    })


    test('if the equals are not the same', () => {
        expect(vowelLinks("rhymes with duck")).toBe(false);
        expect(vowelLinks("dry as a desert")).toBe(false);
        expect(vowelLinks("Thank you")).toBe(false);
    })
})