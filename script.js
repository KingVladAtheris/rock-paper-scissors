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
const totalScore = document.querySelector("#score");

// Game logic
function playRound(){
    let x = getComputerChoice();
    let y = humanChoice;
    let humanwins = true;
    let tie = false;
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
        totalScore.textContent = `It's a tie. Score is Human: ${humanScore} Computer: ${computerScore}`;
    }
    else if (humanwins){
        humanScore += 1;
        totalScore.textContent = `Human wins! Score is Human: ${humanScore} Computer: ${computerScore}`;

    }
    else {
        computerScore += 1;
        totalScore.textContent = `Computer wins! Score is Human: ${humanScore} Computer: ${computerScore}`;
    }


    


}
