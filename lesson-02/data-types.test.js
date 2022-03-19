const{reverseTheNumber}=require('./data-types');

describe('data-types',()=>{
    test('task01',()=>{
        expect(reverseTheNumber(45677)).toEqual(77654);
        // expect(reverseTheNumber(47890)).toEqual(09874)
    })
})