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
function getHumanChoice(){
    let x = prompt("Enter: Rock, Paper, or Scissors:");
    return x;
}

// Variables to keep track of score
let humanScore = 0;
let computerScore = 0;

// Game logic
function playRound(){
    let x = getComputerChoice();
    let y = getHumanChoice();
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
        alert(`It's a tie. Score is Human: ${humanScore} Computer: ${computerScore}`);
    }
    else if (humanwins){
        humanScore += 1;
        alert(`Human wins! Score is Human: ${humanScore} Computer: ${computerScore}`);

    }
    else {
        computerScore += 1;
        alert(`Computer wins! Score is Human: ${humanScore} Computer: ${computerScore}`);
    }


    


}