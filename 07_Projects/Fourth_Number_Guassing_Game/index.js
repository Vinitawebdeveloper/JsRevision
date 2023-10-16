// console.log(Math.floor(Math.random()*100+1))
let randomNumber=parseInt(Math.random()*100+1)
const submit=document.querySelector("#subt")
const userInput=document.querySelector("#guessField")
const guessesSlot=document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")    
const lowOrHi = document.querySelector(".lowOrHi")    
const startOver = document.querySelector(".resultParas")  

const p=document.createElement("p")

let preGuess=[]
let numGuess=1

let playGame=true

if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)

    })
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert("Please Enter a valid Number ")
    }else
     if(guess<1){
        alert("Please Enter a Number more then 1 ")
    }else if(guess>100){
        alert("Please Enter a Number less then 100 ")
    }else{
        preGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage('You guess is right')
        endGame()
    }else if(guess<randomNumber){
        displayMessage('Number is TOO Low')

    }else if(guess>randomNumber){
        displayMessage('Number is TOO High')

    }

}

function displayGuess(guess){
    userInput.value=""
    guessesSlot.innerHTML+=`${guess} `
    numGuess++
    remaining.innerHTML=`${11-numGuess}`

}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`

}

function endGame(){
    userInput.value=''
    userInput.setAttribute("disabled","")
    p.classList.add("button")
    p.innerHTML='<h2 id="newGame">Start New Game</h2>'
    startOver.appendChild(p)
    playGame=false
    newGame()
    
}

function newGame(){
    const newGameButton=document.querySelector("#newGame")
    newGameButton.addEventListener("click",function (e) {
        randomNumber=parseInt(Math.random()*100+1)
        preGuess=[]
        numGuess=1
        guessesSlot.innerHTML=""
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)
        playGame=true
        
    })

}


