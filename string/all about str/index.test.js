const allAboutStr = require('./index')

describe('check all rules are correct', () =>{
   test('should return length first last middle repeated with especial format', () => {
    expect(allAboutStr('banana')).toEqual([6, 'b', 'a', 'na', '@ index 5'])
   } )
} 
)