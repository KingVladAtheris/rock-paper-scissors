console.log("Hello");
//Selecting all elements
const roleplayBox = document.querySelector("#roleplay")
const roleplayText = document.querySelector(".text");
const startGame = document.querySelector("#confirm");
const humanTally = document.querySelector("#human-choice");
const demonTally = document.querySelector("#demon-choice");
const imageBlock = document.querySelector("#image");

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
        //Creating the elements for keeping track of score
        const displayHumanChoice = document.createElement("div");
        const displayComputerChoice = document.createElement("div");
        const displayScore = document.createElement("div");
        const displayHumanScore = document.createElement("div");
        const displayDemonScore = document.createElement("div");

        displayHumanChoice.classList.add("choice");
        displayComputerChoice.classList.add("choice");
        displayScore.classList.add("score");
        displayHumanScore.classList.add("human");
        displayDemonScore.classList.add("demon");

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
        //Adding the elements that keep track of score
        humanTally.appendChild(displayHumanChoice);
        demonTally.appendChild(displayComputerChoice);
        displayScore.appendChild(displayHumanScore);
        displayScore.appendChild(displayDemonScore);
        imageBlock.appendChild(displayScore);

        if (tie){
           displayHumanScore.textContent = `Human: ${humanScore}`;
           displayDemonScore.textContent = `${computerScore} :Demon`;
        }
        else if (humanwins){
            displayHumanScore.textContent = `Human: ${humanScore}`;
           displayDemonScore.textContent = `${computerScore} :Demon`;
           humanScore+=1;
        }
        else {
            displayHumanScore.textContent = `Human: ${humanScore}`;
           displayDemonScore.textContent = `${computerScore} :Demon`;
           computerScore+=1;
        }

        numberRounds += 1;
    }
    //End result screen
    if (numberRounds === 5) {
        choiceRock.remove();
        choicePaper.remove();
        choiceScissors.remove();
         //Creating RP text
         const roleplayTie = document.createElement("div");
         const roleplayWin = document.createElement("div");
         const roleplayLose = document.createElement("div");
         roleplayTie.classList.add("text");
         roleplayWin.classList.add("text");
         roleplayLose.classList.add("text");
         //Writing RP text
        if (humanScore > computerScore){
            roleplayWin.textContent = "Very good. You have earned yourself an extra year of life. Shall we play again?";
            roleplayBox.appendChild(roleplayWin);
            roleplayBox.appendChild(startGame);
        }
        else if (humanScore < computerScore){
            roleplayLose.textContent = "Congratulations! One hundred years in Hell await. Care to try your luck again?";
            roleplayBox.appendChild(roleplayLose);
            roleplayBox.appendChild(startGame);
        }
        else{
            roleplayTie.textContent = "Hmph...It seems we are equally matched, human. Let's try and settle this, yes?";
            roleplayBox.appendChild(roleplayTie);
            roleplayBox.appendChild(startGame);
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


// Variables to keep track of score
let humanScore = 0;
let computerScore = 0;
let numberRounds = 0;
const totalScore = document.querySelector("#score");
const displayHumanScore = document.querySelector("#humanScore");
const displayComputerScore = document.querySelector("#computerScore");




