const {insertionSort}=require('./create-spiral');
const arr=[2,9,6,3,1,7,4]
describe('insertion sort',()=>{
    test('insertion sort',()=>{
        expect(insertionSort(arr)).toEqual( [1,2,3,4,6,7,9])
    })
})