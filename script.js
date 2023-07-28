const totalPoints = document.querySelector('#totalPoints')
const form = document.querySelector('form')

const btnPlayerOne = document.querySelector('#playerOne')
const btnPlayerTwo = document.querySelector('#playerTwo')
const btnReset = document.querySelector('#reset')

const scorePlayerOne = document.querySelector('#playerOneScore')
const scorePlayerTwo = document.querySelector('#playerTwoScore')


const scores = {
    playerOneScore: 0,
    playerTwoScore: 0
}

creatOption()
let finalPoints = Number(totalPoints.value);

form.addEventListener('click', (e) => {
    e.preventDefault()
    finalPoints = Number(totalPoints.value);
})


function creatOption(){
    for(let i = 5; i < 11; i++){
        const point = document.createElement('option')
        point.value = `${i}`
        point.innerText = `${i}`
        totalPoints.appendChild(point)
    }
}

btnPlayerOne.addEventListener('click', () =>{
    // console.log('click');
    if(scores.playerOneScore < finalPoints){
        scores.playerOneScore++
        updateText();        
    }
    checkPoint()
    
})

btnPlayerTwo.addEventListener('click', () =>{
    if(scores.playerTwoScore < finalPoints){
        scores.playerTwoScore++
        updateText();        
    }
    checkPoint()
})

btnReset.addEventListener('click', () => {
    scores.playerOneScore = 0;
    scores.playerTwoScore = 0;
    updateText()
    btnPlayerOne.disabled = false
    btnPlayerTwo.disabled = false
    scorePlayerOne.classList.remove('green')
    scorePlayerOne.classList.remove('red')
    scorePlayerTwo.classList.remove('green')
    scorePlayerTwo.classList.remove('red')
})


function updateText(){
    scorePlayerOne.innerText = `${scores.playerOneScore}`
    scorePlayerTwo.innerText = `${scores.playerTwoScore}`

}

function checkPoint () {
    if(scores.playerOneScore == finalPoints || scores.playerTwoScore == finalPoints){
        btnPlayerOne.disabled = true
        btnPlayerTwo.disabled = true
        if(scores.playerOneScore == finalPoints){
            scorePlayerOne.classList.add('green')
            scorePlayerTwo.classList.add('red')
        } else {
            scorePlayerOne.classList.add('red')
            scorePlayerTwo.classList.add('green')
        }
    }
}
