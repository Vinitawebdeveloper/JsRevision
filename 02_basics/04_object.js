// object singleton ya constructer ki tarah define 
// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id="12d";
tinderUser.name="vinita"
tinderUser.loggedIn = false

// console.log(tinderUser);
const regularUser= {
    email:"sometime@gmail.com",
    fullname:{
        userfullname:{
            firstname:"vinita",
            lastname:"kumari"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3 = {obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users=[
    {
        id:1,
        email:"hskhlal@gmail.com"
    },
    {
        id:1,
        email:"hskhlal@gmail.com"
    },
    {
        id:1,
        email:"hskhlal@gmail.com"
    },
    {
        id:1,
        email:"hskhlal@gmail.com"
    },
    {
        id:1,
        email:"hskhlal@gmail.com"
    }
]

// console.log(users[1].email)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('loggedInj'));



// Object Destructuring 
const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructure:"vinita"
}
// console.log(course.courseInstructure)

const {courseInstructure:instructer}=course
console.log(instructer);

// {
//     "name":"vinita",
//     "coursename":"js in hindi",
//     "fee":"free"
// }


