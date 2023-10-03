// AGAR OBJECT LITERAL SE DEFINE HOTA HAI TO SINGLETON NHI BNTA 
// AGAR OBJECT CONSTRUCTER SE DEFINE HO TO HAMESHA SINGLETON HI BNTA HAI
// Object.create


const mySyb= Symbol("key1")

// OBJECT LITERALS  
const jsUser = {
    name:"vinita",
    "full name":"vinita kumari",
    [mySyb]:"mykey1",
    age:18,
    location:"faridabad",
    email:"vinita@google.com",
    isloggedin:false ,
    lastlogindays:["monday","saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser["full name"]);
// console.log(jsUser[mySyb]);
// console.log(typeof(jsUser[mySyb]));

jsUser.email = "viini@gmail.com"
// console.log(jsUser);
// Object.freeze(jsUser)
jsUser.email="aru@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User")
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this["full name"]}`)
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());