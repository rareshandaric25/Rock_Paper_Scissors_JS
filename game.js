
//Computer player
//Randomly generate rock, paper or scissors for the computer
function computerPlay(){
    let computerSelection;
    
    let randomValue = Math.floor(Math.random() * 3);

    if(randomValue == 0){
        computerSelection = "rock" 
    } else if(randomValue == 1){
        computerSelection = "scissors" 
    } else {
        computerSelection = "paper" 
    }

    return computerSelection;

};


// Human Player
function getPlayerSelection() {
    const validChoices = ["rock", "paper", "scissors"];
    let playerInput;
    let message = "Player choice:";

    do {
        playerInput = prompt(message);

        if (playerInput === null) {
            return null;
        }

        playerInput = playerInput.trim().toLowerCase();

        if (!validChoices.includes(playerInput)) {
            message = "Invalid choice! Please choose rock, paper or scissors:";
        }

    } while (!validChoices.includes(playerInput));

    return playerInput;
}


// Play one round and return the winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return {
            winner: "draw",
            message: `Draw! You both chose ${playerSelection}.`
        };
    }

    const playerWins =
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper");

    if (playerWins) {
        return {
            winner: "player",
            message: `You win! ${playerSelection} beats ${computerSelection}.`
        };
    }

    return {
        winner: "computer",
        message: `Computer wins! ${computerSelection} beats ${playerSelection}.`
    };
}


// play the game until either side wins three rounds.
function game() {
    let playerScore = 0;
    let computerScore = 0;

    alert(
        "Welcome to Rock, Paper, Scissors!\n\n" +
        "Choose rock, paper, or scissors in each prompt. First to 3 points wins.\n" +
        "You can press Cancel at any time to safely end the game."
    );

    while (playerScore < 3 && computerScore < 3) {
        const playerSelection = getPlayerSelection();

        if (playerSelection === null) {
            alert("Game cancelled. Thanks for playing!");
            return;
        }

        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);

        if (roundResult.winner === "player") {
            playerScore++;
        } else if (roundResult.winner === "computer") {
            computerScore++;
        }

        alert(`${roundResult.message}\n\nScore: You ${playerScore} - Computer ${computerScore}`);
    }

    const finalMessage = playerScore === 3
        ? "Congratulations! You defeated the evil computer!"
        : "The computer won three rounds. Better luck next time!";

    alert(`${finalMessage}\n\nFinal score: You ${playerScore} - Computer ${computerScore}`);
}


game();
