const clock = document.getElementById('clock');

setInterval(function(){
    let date = new Date();
    // console.log()
    clock.innerHTML=date.toLocaleTimeString();
},1000)