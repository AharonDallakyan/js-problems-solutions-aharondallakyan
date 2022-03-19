function reverseTheNumber(num) {
    const arrOfNum = [...('' + num)];
    return +arrOfNum.reverse().join('').toString()
}
module.exports = {
    reverseTheNumber
};