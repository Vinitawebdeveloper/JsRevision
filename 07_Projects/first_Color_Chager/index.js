const button=document.querySelectorAll(".main_four_div")
// console.log(button);
const body = document.querySelector("body")
// console.log(body);
button.forEach((button)=>{
    console.log(button)
    button.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);
        if(e.target.id==="one"){
            body.style.backgroundColor="rgb(163, 75, 75)";
        }else if(e.target.id==="two"){
            body.style.backgroundColor="#fff";
        }
        else if(e.target.id==="three"){
            body.style.backgroundColor="blue";
        }
        else {
            body.style.backgroundColor="yellow";
        }
    })
})