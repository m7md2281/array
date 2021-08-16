//Q1
const cards = [1,2,3,4,5,6,7,8]

cards.shift()
cards.push(1)

console.log(cards)

//Q2

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrOne.concat(arrTwo).sort().reverse()

console.log(finalArr);

//Q3

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1.concat(arr2)
allArrs = allArrs.map(allArrs => allArrs.toLowerCase());


console.log(allArrs);


