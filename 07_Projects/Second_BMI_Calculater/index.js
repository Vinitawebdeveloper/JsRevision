form = document.querySelector("form")
// console.log(form)

form.addEventListener('submit',(e)=>{
    // console.log("hello");
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value);
    // console.log(height)
    const weight = parseInt(document.querySelector("#weight").value);
    // console.log(weight)
    const result = document.querySelector("#result")
    // console.log(result)
    const result_weight = document.querySelector("#result_weight")
    result.style.color="#fff"
    result.style.fontSize="2vw"
    result.style.textTransform="capitalize"

    result_weight.style.color="blue"
    result_weight.style.fontSize="2vw"
    result_weight.style.textTransform="capitalize"

    if(height === ""  || height<0 || isNaN(height)){
        result.innerHTML=`please give a valid height`;
    }else if(weight === ""  || weight<0 || isNaN(weight)){
        result.innerHTML=`please give a valid weight`;
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML=`<span>${bmi}</span>`
        if(bmi<18.6){
            result_weight.innerHTML=`Under weight`

        }else if(bmi>=18.6 && bmi<24.9){
            result_weight.innerHTML=`Normal Weight`
        }else{
            result_weight.innerHTML=`Over weight`
        }
    }
});