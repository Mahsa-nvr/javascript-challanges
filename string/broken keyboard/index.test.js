const findBrokenKeys = require('./index')

describe('ifindBrokenKeys', () => {
    //
    test  ('should return broken key arrays', () => {
        ///define inputs 
        let correct = "happy birthday"
        let typed = "hawwy birthday"
        //define output 
        let output = "p"
        //test for correct expectation
        expect(findBrokenKeys(correct, typed)).toBe(output)
    
    })

    test('should return an empty array if no keys are broken', () => {
        let correct = "happy birthday"
        let typed = "happy birthday"
        let output = [ ]
        expect(findBrokenKeys(correct, typed)).toBe(output)
    })

})