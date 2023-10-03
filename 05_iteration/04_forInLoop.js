const myObj={
    js:"javascript",
    c:"C",
    cpp:"c++",
    py:"python"
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

let arr =[23,23,43,23,4,1,21,21]
for (const key in arr) {
    // console.log(arr[key])
}

const map = new Map()
map.set("js","javascript")
map.set("cpp","c++")
map.set("py","python")
map.set("rb","rubi")

for (const key in map) {
    console.log(key);
}