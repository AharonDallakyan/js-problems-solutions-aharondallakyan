const{filterRange}=require('./array-methods');
let arrNum = [1,10,20,30];
describe('array-methods',()=>{
    test('task01',()=>{
        expect(filterRange(arrNum,9,23));
        expect(filterRange([100,200,300],9,23));
        expect(filterRange([-10,-8,0,10,20],-100,15))
    })
})