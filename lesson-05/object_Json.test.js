const {getHead,getTail,fromPairs,zipArrIntoObj}=require('./object_Json');
const arr=[1,2,3]
const arr2 =[["a", 1],["b", 2],]
describe('object-json',()=>{
    test(' head ',()=>{
        expect(getHead(arr)).toEqual([1])
     })
    test(' tail ',()=>{
        expect(getTail(arr)).toEqual([2,3])
    })
    test('entries',()=>{
        expect(fromPairs(arr2)).toEqual({ '0': [ 'a', 1 ], '1': [ 'b', 2 ] })
    })
    test('zipArr',()=>{
        expect(zipArrIntoObj(['a','b','c'],[1,2])) .toEqual({ a: 1, b: 2, c: null })
    })

    })
