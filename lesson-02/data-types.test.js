const{reverseTheNumber,isPalindrom,isBlank,stringToArray,abbreviateName,titleCase,appendChar,isLastDigitSame,bubbleSort}=require('./data-types');

describe('data-types',()=>{
    test('task01',()=>{
        expect(reverseTheNumber(45677)).toEqual(77654);
        expect(reverseTheNumber(47890)).toBe(9874)
    })
    test('isPalindrom',()=>{
        expect(isPalindrom('madam')).toEqual(true)
        expect(isPalindrom('nurse')).toEqual(false)
    })
    test('isBlank',()=>{
        expect(isBlank("madam")).toEqual(false)
        expect(isBlank("")).toEqual(true)
    })
    test('stringToArray',()=>{
        expect(stringToArray("Web Development")).toEqual([ 'Web', 'Development' ])
        expect(stringToArray("")).toEqual([ '' ])
    })
test('abbreviateName',()=>{
    expect(abbreviateName("Jon Doe")).toEqual("Jon D.")
    expect(abbreviateName("Jon")).toEqual('Jon')
})
    test('titleCase',()=>{
        expect(titleCase("JavaScript exercise. Python exercise")).toEqual('Javascript Exercise. Python Exercise')
    })
test('appendChar',()=>{
    expect(appendChar("Swift")).toEqual('sSwifts')
})
    test('isLastDigitSame',()=>{
        expect(isLastDigitSame(134, 34, 4564)).toEqual(true)
        expect(isLastDigitSame(134, 33)).toEqual(false)
    })
    test('bubbleSort',()=>{
        expect(bubbleSort([12,345,4,546,122,84,98,64,9,1,3223,455,23,234,213],'ascending')).toEqual([
            1,   4,   9,  12,   23,
            64,  84,  98, 122,  213,
            234, 345, 455, 546, 3223
        ])
        expect(bubbleSort([12,345,4,546,122,84,98,64,9,1,3223,455,23,234,213],'descending')).toEqual([
            3223, 546, 455, 345, 234,
            213, 122,  98,  84,  64,
            23,  12,   9,   4,   1
        ])
        expect(bubbleSort([12,345,4,546,122,84,98,64,9,1,3223,455,23,234,213],'no order')).toEqual( "true error")

    })



})