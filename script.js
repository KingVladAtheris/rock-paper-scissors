// Selecting all elements
const roleplayBox = document.querySelector("#roleplay");
const roleplayText = document.querySelector(".text");
const startGame = document.querySelector("#confirm");
const humanTally = document.querySelector("#human-choice");
const demonTally = document.querySelector("#demon-choice");
const imageBlock = document.querySelector("#image");

// Variables to keep track of score
let humanScore = 0;
let computerScore = 0;
let numberRounds = 0;

// Rock, Paper, Scissors Buttons
let choiceRock = document.createElement("button");
choiceRock.value = "Rock";
choiceRock.classList.add("roleplayrps");
choiceRock.textContent = "Rock";
choiceRock.style.margin = "0px 10px";

let choicePaper = document.createElement("button");
choicePaper.value = "Paper";
choicePaper.classList.add("roleplayrps");
choicePaper.textContent = "Paper";
choicePaper.style.margin = "0px 10px";

let choiceScissors = document.createElement("button");
choiceScissors.value = "Scissors";
choiceScissors.classList.add("roleplayrps");
choiceScissors.textContent = "Scissors";
choiceScissors.style.margin = "0px 10px";

// Get the computer choice
function getComputerChoice() {
    let x = Math.random();
    if (x < 0.33) return "Rock";
    if (x < 0.66) return "Paper";
    return "Scissors";
}

// Reset the game state
function resetGame() {
    // Reset variables
    humanScore = 0;
    computerScore = 0;
    numberRounds = 0;

    // Clear dynamically added elements from tally sections
    Array.from(humanTally.children).forEach((child, index) => {
        if (index > 1) child.remove(); // Preserve original elements
    });
    Array.from(demonTally.children).forEach((child, index) => {
        if (index > 1) child.remove(); // Preserve original elements
    });

    // Clear score display
    const scoreDisplays = imageBlock.querySelectorAll(".scoreDisplay");
    scoreDisplays.forEach(score => score.remove());

    // Reset displayed scores

    // Reset roleplay box
    roleplayBox.innerHTML = '';
    roleplayBox.style.flexDirection = "column";
    roleplayBox.style.justifyContent = "center";
    roleplayBox.appendChild(roleplayText);
    roleplayBox.appendChild(startGame);

    // Remove existing event listeners and reset buttons
    choiceRock.replaceWith(choiceRock = choiceRock.cloneNode(true));
    choicePaper.replaceWith(choicePaper = choicePaper.cloneNode(true));
    choiceScissors.replaceWith(choiceScissors = choiceScissors.cloneNode(true));
}

// Game logic
function playRound(humanChoice) {
    console.log("Round Start:", { humanScore, computerScore, numberRounds });
    let computerChoice = getComputerChoice();
    let humanWins = false;
    let tie = false;

    if (numberRounds < 5) {
        const displayHumanChoice = document.createElement("div");
        const displayComputerChoice = document.createElement("div");
        const displayScore = document.createElement("div");
        const displayHumanScore = document.createElement("div");
        const displayDemonScore = document.createElement("div");

        displayHumanChoice.classList.add("choice");
        displayComputerChoice.classList.add("choice");
        displayScore.classList.add("score", "scoreDisplay");
        displayHumanScore.classList.add("human");
        displayDemonScore.classList.add("demon");

        // Determine round outcome
        if (humanChoice === computerChoice) {
            tie = true;
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            humanWins = true;
        }

        displayHumanChoice.textContent = humanChoice;
        displayComputerChoice.textContent = computerChoice;

        if (tie) {
            displayHumanScore.textContent = `Human: ${humanScore}`;
            displayDemonScore.textContent = `${computerScore} :Demon`;
        } else if (humanWins) {
            humanScore += 1;
            displayHumanScore.textContent = `Human: ${humanScore}`;
            displayDemonScore.textContent = `${computerScore} :Demon`;
        } else {
            computerScore += 1;
            displayHumanScore.textContent = `Human: ${humanScore}`;
            displayDemonScore.textContent = `${computerScore} :Demon`;
        }

        humanTally.appendChild(displayHumanChoice);
        demonTally.appendChild(displayComputerChoice);
        displayScore.appendChild(displayHumanScore);
        displayScore.appendChild(displayDemonScore);
        imageBlock.appendChild(displayScore);

        numberRounds++;
    }

    // End result screen
    if (numberRounds === 5) {
        choiceRock.remove();
        choicePaper.remove();
        choiceScissors.remove();

        const resultText = document.createElement("div");
        resultText.classList.add("text");

        if (humanScore > computerScore) {
            resultText.textContent = "Very good. You have earned yourself an extra year of life. Shall we play again?";
        } else if (humanScore < computerScore) {
            resultText.textContent = "Congratulations! One hundred years in Hell await. Care to try your luck again?";
        } else {
            resultText.textContent = "Hmph...It seems we are equally matched, human. Let's try and settle this, yes?";
        }

        roleplayBox.innerHTML = '';
        roleplayBox.style.flexDirection = "column";
        roleplayBox.style.justifyContent = "center";
        roleplayBox.appendChild(resultText);
        roleplayBox.appendChild(startGame);

        // Attach reset functionality
        startGame.addEventListener("click", resetGame, { once: true });
    }
}

// Start game button
startGame.addEventListener("click", () => {
    roleplayText.remove();
    startGame.remove();
    roleplayBox.style.flexDirection = "row";
    roleplayBox.style.justifyContent = "space-between";
    roleplayBox.appendChild(choiceRock);
    roleplayBox.appendChild(choicePaper);
    roleplayBox.appendChild(choiceScissors);

    // Attach button click handlers
    choiceRock.addEventListener("click", () => playRound("Rock"));
    choicePaper.addEventListener("click", () => playRound("Paper"));
    choiceScissors.addEventListener("click", () => playRound("Scissors"));
});
