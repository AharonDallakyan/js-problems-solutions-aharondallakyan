const{filterRange,concatMany,findById,generate,removeByLetter}=require('./array-methods');
let arrNum = [1,10,20,30];
let fremwork = [
    {id:1, title:'React'},
    {id:2, title: 'Angular'},
    {id:3, title: 'Vue'}
];
let arr = ["Godfather","Whiplash","Social Network"];
let arr1 = ["Godfather","GWhiplash","Social Network"];
describe('array-methods',()=>{
    test('task01',()=>{
        expect(filterRange(arrNum,9,23));
        expect(filterRange([100,200,300],9,23));
        expect(filterRange([-10,-8,0,10,20],-100,15))
    })
    test('concat',()=>{
        expect(concatMany([1,2],[2,3],[3,4])).toEqual([ 1, 2, 2, 3, 3, 4 ]);
        expect(concatMany(['1','hello'],[[1,2],2])).toEqual([ '1', 'hello', [ 1, 2 ], 2 ]);
        expect(concatMany([],[],[])).toEqual([])
    });
    test('findById',()=>{
        expect(findById(fremwork,6)).toBe('no data');
        expect(findById(fremwork,3)).toEqual( { id: 3, title: 'Vue' });
    })
    test('generate',()=>{
        expect(generate(arr)).toEqual([
            { title: 'Godfather', idx: 0 },
            { title: 'Whiplash', idx: 1 },
            { title: 'Social Network', idx: 2 }
        ])
    })
    test('removeByLetter',()=>{
        expect(removeByLetter(arr1,'G')).toEqual(['Social Network']);
    })

});