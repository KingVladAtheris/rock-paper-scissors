console.log("Hello");

// Get the computer choice
function getComputerChoice(){
    let x = Math.random();
    let y;
    if (x < 0.33) {
        y = "Rock";
    }
    else if (x >= 0.33 && x < 0.66) {
        y = "Paper";
    }
    else {
        y = "Scissors";
    }
    return y;
}

// Get the human choice
let humanChoice = "";
const humanChoices = document.querySelectorAll(".rps");
humanChoices.forEach(item => {
    item.addEventListener("click", () => {
        humanChoice = item.value;
        playRound();
    })
});
   



// Variables to keep track of score
let humanScore = 0;
let computerScore = 0;
let numberRounds = 0;
const totalScore = document.querySelector("#score");
const displayHumanScore = document.querySelector("#humanScore");
const displayComputerScore = document.querySelector("#computerScore");

// Game logic
function playRound(){
    let x = getComputerChoice();
    let y = humanChoice;
    let humanwins = true;
    let tie = false;
    if (numberRounds < 5){
        if (x === "Rock" && y === "Paper"){
            humanwins = true;
            tie = false;
        }
        else if(x === "Rock" && y === "Rock"){
            humanwins = false;
            tie = true;
        }
        else if(x === "Rock" && y === "Scissors"){
            humanwins = false;
            tie = false;
        }
        else if(x === "Paper" && y === "Paper"){
            humanwins = false;
            tie = true;
        }
        else if(x === "Paper" && y === "Rock"){
            humanwins = false;
            tie = false;
        }
        else if(x === "Paper" && y === "Scissors"){
            humanwins = true;
            tie = false;
        }
        else if(x === "Scissors" && y === "Rock"){
            humanwins = true;
            tie = false;
        }
        else if(x === "Scissors" && y === "Paper"){
            humanwins = false;
            tie = false;
        }
        else if(x === "Scissors" && y === "Scissors"){
            humanwins = false;
            tie = true;
        }

        if (tie){
            totalScore.textContent = `Computer chose ${x}. It's a tie.`;
            displayHumanScore.textContent = `${humanScore}`;
            displayComputerScore.textContent = `${computerScore}`;
        }
        else if (humanwins){
            humanScore += 1;
            totalScore.textContent = `Computer chose ${x}. Human wins!`;
            displayHumanScore.textContent = `${humanScore}`;
            displayComputerScore.textContent = `${computerScore}`;

        }
        else {
            computerScore += 1;
            totalScore.textContent = `Computer chose ${x}. Computer wins!`;
            displayHumanScore.textContent = `${humanScore}`;
            displayComputerScore.textContent = `${computerScore}`;

        }
        numberRounds += 1;
    }
    if (numberRounds === 5) {
        if (humanScore > computerScore){
            totalScore.textContent = `Game Over. Human Wins! Final score: Human: ${humanScore} Computer: ${computerScore}`;
        }
        else if (humanScore < computerScore){
            totalScore.textContent = `Game Over. Computer Wins! Final score: Human: ${humanScore} Computer: ${computerScore}`;
        }
        else{
            totalScore.textContent = `Game Over. It's a tie! Final score: Human: ${humanScore} Computer: ${computerScore}`;
        }
        return;
    }


    


}

//Reset Function
function resetGame(){
    humanScore = 0;
    computerScore = 0;
    numberRounds = 0;
    displayHumanScore.textContent = "0";
    displayComputerScore.textContent = "0";
    totalScore.textContent = ""
}

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", resetGame);
