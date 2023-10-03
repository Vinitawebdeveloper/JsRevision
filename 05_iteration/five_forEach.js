const coding = ["js","ruby","python","cpp","c"]

// iteration of array using for each simple function 
coding.forEach(function (item){
    // console.log(item);
})

// iteration of array using for each arrow function 
coding.forEach( (item)=>{
    // console.log(item);
})

function printMe(item){
// console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr)=>{
// console.log(`item is ${item} , index is ${index}, and array is ${arr}`);
})

const mycoding=[
{
    "language":"javascript",
    "file":"js"
},
{
    "language":"python",
    "file":"py"
},
{
    "language":"C++",
    "file":"cpp"
},
{
    "language":"c",
    "file":"c"
},
]

mycoding.forEach((item,index,arr)=>{
console.log(item);
})