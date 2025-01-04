console.log("Hello");
//Start game button
const roleplayBox = document.querySelector("#roleplay")
const roleplayText = document.querySelector("#text");
const startGame = document.querySelector("#confirm");
startGame.addEventListener("click", () =>{
    roleplayText.remove();
    startGame.remove();
    roleplayBox.style.flexDirection = "row";
    roleplayBox.style.justifyContent = "space-between";
    roleplayBox.appendChild(choiceRock);
    roleplayBox.appendChild(choicePaper);
    roleplayBox.appendChild(choiceScissors);
})

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

//Side display
const displayRock = document.createElement("div");
displayRock.classList.add("choice");
displayRock.textContent = "Rock";

const displayPaper = document.createElement("div");
displayPaper.classList.add("choice");
displayPaper.textContent = "Paper";

const displayScissors = document.createElement("div");
displayScissors.classList.add("choice");
displayScissors.textContent = "Scissors";



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

let humanChoice = "";
const humanChoices = document.querySelectorAll(".roleplayrps");
humanChoices.forEach(item => {
    item.addEventListener("click", () => {
        humanChoice = item.value;
        alert(humanChoice);
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

//const resetButton = document.querySelector("#resetButton");
//resetButton.addEventListener("click", resetGame);
