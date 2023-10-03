const num=[1,2,3,4,5,6,7,8,2,3,3,4]

// const newnum=num.map((n)=>{
// return n+10
// })

// chaining method 
const newnum=num.map((nu)=>nu*10).map((n)=>n+1).filter((num)=>num>=40)

console.log(newnum);


