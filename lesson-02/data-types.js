function reverseTheNumber(num) {
    const arrOfNum = [...('' + num)];
    return +arrOfNum.reverse().join('').toString()
}
function isPalindrom(string) {
    const reversedStr =[...string].reverse().join('');

    return reversedStr === string;
}
function isBlank(string) {
    return !string;
}
function stringToArray(string) {
    return string.split(" ");
}
function abbreviateName(name) {
    const arrOfName = name.split(' ');

    if(arrOfName.length === 1) {
        return name
    }
    return `${arrOfName[0]} ${arrOfName[1][0]}.`
}
function titleCase(string) {
    const arrFromString = string.split(' ');
    let result = '';
    arrFromString.forEach((item, index) => {
        if(index + 1 === arrFromString.length) {
            result += item[0].toUpperCase() + item.slice(1).toLowerCase();
        }else {
            result += item[0].toUpperCase() + item.slice(1).toLowerCase() + ' ';
        }
    });

    return result;
}
function appendChar(string) {
    const firstChar = string[0].toLowerCase();

    return firstChar + string + firstChar
}
function isLastDigitSame(...numbers) {
    const strOfNumbers = numbers.map(num => num + '');
    const lastDigit = strOfNumbers[0] % 10;
    const result = strOfNumbers.find(num => !(num % 10 === lastDigit))

    return !result
}
const bubbleSort = (arr,string) => {
    let str = "true error"
    if(string === 'descending'){
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i; j++) {
                if (arr[j] < arr[j + 1]) {
                    let tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
    }else if(string === 'ascending'){
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    let tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }

            }
        }
    }else{
        return str;
    }

    return arr;
}

module.exports = {
    reverseTheNumber,
    isPalindrom,
    isBlank,
    stringToArray,
    abbreviateName,
    titleCase,
    appendChar,
    isLastDigitSame,
    bubbleSort
};