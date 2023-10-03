const num=[1,2,3]
// const myTotal = num.reduce(function(acc,cuVal){
//     console.log(`acc :- ${acc} and current value ${cuVal}`);
//     return acc+cuVal
// },0)
const myTotal=num.reduce((acc,cval)=>acc+cval,0)
// console.log(myTotal);

const shoppingcard=[
    {
        product:"js course",
        price:2999
    },
    {
        product:"py course",
        price:4999
    },
    {
        product:"node course",
        price:3999
    },
    {
        product:"css course",
        price:999
    },
]

const sum=shoppingcard.reduce((acc,cval)=>{
    console.log(`${acc} and ${cval.price}`);
    return acc+cval.price
},0)

console.log(sum);