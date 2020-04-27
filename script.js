const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resultsDiv = document.querySelector('.results');
const btns = document.querySelectorAll('.buttons');
const finalDiv = document.querySelector('.final');
const finalP = document.querySelector('#final');
const reset = document.querySelector('#reset');
let winGame = 0;
let numberGame = 0;

reset.addEventListener('click',function(){
    numberGame = 0;
    winGame = 0;
    const round = document.querySelector('span');
    round.textContent = `0`;
    finalP.textContent ='';
    for (let i =0;i<5;i++) {
        const resultss = document.querySelector('.results p');
        resultsDiv.removeChild(resultss);
    }
    

});

rock.addEventListener('click',function(){
    if (numberGame > 4) {
        return;
    }
    const results = document.createElement('p');
    const computerSelection = computerPlay();
    let result = playRound('rock',computerSelection);
    results.textContent = result; 
    resultsDiv.appendChild(results);
    if (result.includes("won")){
            winGame++;
        }
    
});

paper.addEventListener('click', function(){
    if (numberGame > 4) {
        return;
    }
    const results = document.createElement('p');
    const computerSelection = computerPlay();
    let result = playRound('paper',computerSelection);
    results.textContent = result; 
    resultsDiv.appendChild(results);
    if (result.includes("won")){
            winGame++;
        }
});

scissors.addEventListener('click',function() {
    if (numberGame > 4) {
        return;
    }
    const results = document.createElement('p');
    const computerSelection = computerPlay();
    let result = playRound('scissors',computerSelection);
    results.textContent = result; 
    resultsDiv.appendChild(results);
    if (result.includes("won")){
            winGame++;
        }
});

btns.forEach ((button) => {
    button.addEventListener('click',function () {
        if (numberGame > 4) {
            if (winGame > (numberGame/2)){
                finalP.textContent = `You won the battle | ${winGame}/${numberGame}`;
                return;
            } else {
                finalP.textContent = `You lost the battle | ${winGame}/${numberGame}`;
                return;
            }   
        }
        numberGame++;
        const round = document.querySelector('span');
        round.textContent = `${numberGame}`;
        if (numberGame > 4) {
            if (winGame > (numberGame/2)){
                finalP.textContent = `You won the battle | ${winGame}/${numberGame}`;
                return;
            } else {
                finalP.textContent = `You lost the battle | ${winGame}/${numberGame}`;
                return;
            }   
        }
    });
});

function computerPlay(){
    let cases = ["Rock","Paper","Scissors"];
    const randomCase = cases[Math.floor(Math.random()*cases.length)];
    return randomCase
}

function playRound(playerSelection,computerSelection){
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return `it is draw. you got the same`;
    } else if (playerSelection.toLowerCase() == "rock"){
        if (computerSelection.toLowerCase()=='scissors'){
            return 'you won: rock > scissors';
        }else {
            return 'you lose: rock < paper';
        }
    }else if (playerSelection.toLowerCase()=='paper'){
        if (computerSelection.toLowerCase()=='rock'){
            return 'you won: paper > rock';
        } else {
            return 'you lost: paper < scissors';
        }
    }else {
        if (computerSelection.toLowerCase()=='paper'){
            return 'you won: scissors > paper';
        }else {
            return 'you lost: scissors < rock'
        }
    }
}