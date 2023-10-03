const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes =["superman","flash","batman"]

// console.log(marvel_heroes.push(dc_heroes))
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes);

// newarr1=marvel_heroes.concat (dc_heroes)
// console.log(newarr1);

// const allNewArr =[...marvel_heroes,...dc_heroes]
// console.log(allNewArr);

// const anotherArray=[12,12,23,3,5,[34,54,23,53],12,12,76,[87,67,[45,3,43,34]]]
// const realAnotherArr= anotherArray.flat(3)
// console.log(realAnotherArr);

console.log(Array.isArray("vinita"));
console.log(Array.from("vinita"));
console.log(Array.from({name:"vinita"})); //interesting

let score1=100;
let score2 =200;
let score3=300;
console.log(Array.of(score1,score2,score3))