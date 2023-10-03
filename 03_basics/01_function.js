//function definition
function sayMyName(){         
    console.log("v");
    console.log("i");
    console.log("n");
    console.log("i");
    console.log("t");
    console.log("a");
}

//function Reference
// sayMyName()

// add two number //jab aap function lete hai aur jab ushme value pass karte hai to 
// ushe parameter kahte hai 
// function add(num1,num2){ 
//     const sum=num1+num2
//     console.log(sum)
// }

function add(num1,num2){ 
    // const sum=num1+num2
    // return sum
    return num1+num2
   
}

// jab function ko call krate hai jab ushme value dete hai ushe argument kahte hai
const result = add(2,3)
// console.log("Result: ",result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("tell me user name")
        return
    }
    
    return `${username} just logged In`
}

// console.log(loginUserMessage());

function calculateCardPrice(val1,val2,...num1){
    return num1
}

const shoppingcard = calculateCardPrice(234,2,34,34)
// console.log(shoppingcard);

const user= {
    name:"vinita",
    price:200
}

function objectv(anyobject){
console.log(`user name is ${anyobject.name} and price is ${anyobject.price}`);
}
// objectv(user)


const arr1=[23,23,43,53,23,23]

function returnsecondvalue(arr4){
    return `second value${arr4[2]}`
}

console.log(returnsecondvalue(arr1))