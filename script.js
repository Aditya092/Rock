// Starting Variables
//Storing HTMl elements a variable for easy access
let pScoreboard = document.querySelector('.p-count');
let cScoreboard = document.querySelector('.c-count');
let roundResult = document.querySelector('.result');
//setting score variables for player & computer to track score
let playerScore = 0;
let computerScore = 0;
//intializing Global variables to store user and computer selections
let computerChoice;
let playerChoice;
const gameOptions = ["rock", "paper", "scissor"];
//function to randomly generate a choice for the computer, uses a random number 1-3 to store selections)

function computerChoose() {
  const randomNum = Math.floor(Math.random() * 3);
    computerChoice = gameOptions[randomNum];
}

function userChoice(choice) {
    playerChoice = gameOptions[choice];
    computerChoose();
    game(playerChoice,computerChoice);
}

function game(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        won("tie");
        return;  // nothing more to check when it's a tie
    }

    if (playerChoice == "rock" && computerChoice == "paper")
        won("computer");
    else if (playerChoice == "rock" && computerChoice == "scissor")
        won("player");
    else if (playerChoice == "paper" && computerChoice == "rock")
        won("player");
    else if (playerChoice == "paper" && computerChoice == "scissor")
        won("computer");
    else if (playerChoice == "scissor" && computerChoice == "rock")
        won("computer");
    else if (playerChoice == "scissor" && computerChoice == "paper")
        won("computer");
    else
        alert("Wrong inputs")
}

function won(winner) {
    if (winner == "player") {
        roundResult.innerHTML = "You have won against the UNDERTAKER!!!!";
        playerScore = playerScore + 1;
        pScoreboard.innerHTML = playerScore;
    }
    else if (winner == "computer") {
        roundResult.innerHTML = "bro really lost to a computer";
        computerScore = computerScore + 1;
        cScoreboard.innerHTML = computerScore;
    }
    else
        roundResult.innerHTML = "It's a tie!!!!";
}

function resetGame() {
    roundResult.innerHTML = "";
    playerScore = 0;
    pScoreboard.innerHTML = playerScore;
    computerScore = 0;
    cScoreboard.innerHTML = computerScore;
}
