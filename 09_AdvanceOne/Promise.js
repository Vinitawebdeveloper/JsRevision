const promiseOne = new Promise(function (resolve, reject) {
    // Do an assync Task 
    // DB Calls, cryptography, network
    setTimeout(function () {
        // console.log("Assync Task is completed");
        resolve()
    }, 1000)

})
promiseOne.then(function () {
    // console.log("promise consume");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log("assync Task 2");
        resolve()
    }, 1000)


}).then(function () {
    // console.log("promise consume2")
})

const PromiseThird = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            "username": "vinita",
            "email": "vinita@gmail.com"
        })
    }, 1000)

})
PromiseThird.then(function (user) {
    // console.log(user);
})

const PromiseFourth = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({
                username: "vinita",
                gmail: "vinita@gmail.com"
            })
        } else {
            reject("ERROR! Something is wrong")
        }

    }, 1000)
})

const username = PromiseFourth.then((user) => {
    // console.log(user);
    return user.username
}).then((username) => {
    // console.log(username);
}).catch((error) => {
    // console.log(error);
}).finally(() => {
    // console.log("finally resolve");
})
// console.log(username);

const PromiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = true
        if (!error) {
            resolve({ username: "vinita", gmail: "vinita@gmail.com" })
        } 
        else {
            reject("rejected")
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await PromiseFive
        // console.log(response);
    } catch (error) {
        // console.log(error);
        
    }
    

}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://api.github.com/users/vinitawebdeveloper")
//         // console.log(response);
//         const data=await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E: ",error);
        
//     }

// }
// getAllUsers()
fetch("https://api.github.com/users/vinitawebdeveloper")
.then((response)=>{
return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))