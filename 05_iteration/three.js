// for of 

//["","","","",""]
//[{},{},{},{},{}]

const arr = [1,2,3,4,5,3,3]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if(greet==" "){
        continue
    }
    // console.log(greet);

}

// map in js 

const map = new Map()
map.set('In','india')
map.set('In','india')
map.set('USA','United State of America')
map.set('fr','France')
// console.log(map);

for (const [key,value] of map) {
    // console.log(key,":-",value);
    
}

const myObj ={
    game1:'NFS',
    game2:'spiderman'
}

for (const [key, value] of myObj) {
    console.log(key,":-",value);
}
