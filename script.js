console.log("Hello");
//Selecting all elements
const roleplayBox = document.querySelector("#roleplay")
const roleplayText = document.querySelector("#text");
const startGame = document.querySelector("#confirm");
const humanTally = document.querySelector("#human-choice");
const demonTally = document.querySelector("#demon-choice");

//Start game button
startGame.addEventListener("click", () =>{
    roleplayText.remove();
    startGame.remove();
    roleplayBox.style.flexDirection = "row";
    roleplayBox.style.justifyContent = "space-between";
    roleplayBox.appendChild(choiceRock);
    roleplayBox.appendChild(choicePaper);
    roleplayBox.appendChild(choiceScissors);
    let humanChoice = "";
    const humanChoices = document.querySelectorAll(".roleplayrps");
    humanChoices.forEach(item => {
    item.addEventListener("click", () => {
        humanChoice = item.value;
        playRound();
    });
});

// Game logic
function playRound(){
    let x = getComputerChoice();
    let y = humanChoice;
    let humanwins = true;
    let tie = false;
    if (numberRounds < 5){
        const displayHumanChoice = document.createElement("div");
        const displayComputerChoice = document.createElement("div");

        displayHumanChoice.classList.add("choice");
        displayComputerChoice.classList.add("choice");
        if (x === "Rock" && y === "Paper"){
            displayHumanChoice.textContent = "Paper";
            displayComputerChoice.textContent = "Rock";
            humanwins = true;
            tie = false;
        }
        else if(x === "Rock" && y === "Rock"){
            displayHumanChoice.textContent = "Rock";
            displayComputerChoice.textContent = "Rock";
            humanwins = false;
            tie = true;
        }
        else if(x === "Rock" && y === "Scissors"){
            displayHumanChoice.textContent = "Scissors";
            displayComputerChoice.textContent = "Rock";
            humanwins = false;
            tie = false;
        }
        else if(x === "Paper" && y === "Paper"){
            displayHumanChoice.textContent = "Paper";
            displayComputerChoice.textContent = "Paper";
            humanwins = false;
            tie = true;
        }
        else if(x === "Paper" && y === "Rock"){
            displayHumanChoice.textContent = "Rock";
            displayComputerChoice.textContent = "Paper";
            humanwins = false;
            tie = false;
        }
        else if(x === "Paper" && y === "Scissors"){
            displayHumanChoice.textContent = "Scissors";
            displayComputerChoice.textContent = "Paper";
            humanwins = true;
            tie = false;
        }
        else if(x === "Scissors" && y === "Rock"){
            displayHumanChoice.textContent = "Rock";
            displayComputerChoice.textContent = "Scissors";
            humanwins = true;
            tie = false;
        }
        else if(x === "Scissors" && y === "Paper"){
            displayHumanChoice.textContent = "Paper";
            displayComputerChoice.textContent = "Scissors";
            humanwins = false;
            tie = false;
        }
        else if(x === "Scissors" && y === "Scissors"){
            displayHumanChoice.textContent = "Scissors";
            displayComputerChoice.textContent = "Scissors";
            humanwins = false;
            tie = true;
        }
        humanTally.appendChild(displayHumanChoice);
        demonTally.appendChild(displayComputerChoice);

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

});

//Rock, Paper, Schissors Buttons
const choiceRock = document.createElement("button")
choiceRock.value = "Rock";
choiceRock.classList.add("roleplayrps");
choiceRock.textContent = "Rock";
choiceRock.style.margin = "0px 10px";

const choicePaper = document.createElement("button")
choicePaper.value = "Paper";
choicePaper.classList.add("roleplayrps");
choicePaper.textContent = "Paper";
choicePaper.style.margin = "0px 10px";

const choiceScissors = document.createElement("button")
choiceScissors.value = "Scissors";
choiceScissors.classList.add("roleplayrps");
choiceScissors.textContent = "Scissors";
choiceScissors.style.margin = "0px 10px";



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
//let humanChoice = "";
//const humanChoices = document.querySelectorAll(".rps");
//humanChoices.forEach(item => {
//   item.addEventListener("click", () => {
//        humanChoice = item.value;
//        playRound();
//    })
//});



   



// Variables to keep track of score
let humanScore = 0;
let computerScore = 0;
let numberRounds = 0;
const totalScore = document.querySelector("#score");
const displayHumanScore = document.querySelector("#humanScore");
const displayComputerScore = document.querySelector("#computerScore");



//Reset Function
function resetGame(){
    humanScore = 0;
    computerScore = 0;
    numberRounds = 0;
    displayHumanScore.textContent = "0";
    displayComputerScore.textContent = "0";
    totalScore.textContent = ""
}

//const resetButton = document.querySelector("#resetButton");
//resetButton.addEventListener("click", resetGame);
