const randomColor = function(){
    const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color

}
const startChangingColor=function(){
    console.log("start")
    document.body.style.backgroundColor=randomColor()

}
const stopChangingColor=function(){
    console.log("end");

}
console.log(randomColor());
document.querySelector("#start").addEventListener("click",startChangingColor)
document.querySelector("#stop").addEventListener("click",stopChangingColor)