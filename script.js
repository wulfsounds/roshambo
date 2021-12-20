
function game() {

    let sign = prompt("Let's RO - SHAM - BO! Type your hand sign.");

    if (sign.toLowerCase == ['rock', 'paper', 'scissors']) {
        game(playRound());
    }

    function computerPlay() {
        let compChoice = Math.floor(Math.random() * 3) + 1;
        if (compChoice === 1) {
            return "rock"
        } else if (compChoice === 2) {
            return "paper"
        } else if (compChoice === 3) {
            return "scissors"
        }
    };

    function playRound(playerSelection, computerSelection) {
        // Player Chooses Rock
        if (playerSelection === "rock" && computerSelection === "scissors") {
            return "You Win! Rock smashes Scissors!";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            return "You Lose! Paper covers Rock!";
        // Player Chooses Paper
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            return "You Win! Paper covers Rock!";
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            return "You Lose! Scissors cuts Paper!";
        // Player Chooses Scissors
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            return "You Win! Scissors cuts Paper!";
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            return "You Lose! Rock smashes Scissors!";
        } else {
            return "It's a draw!";
        }
        
    };
    
    let playerSelection = sign;
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

    
}

game();
game();
game();
game();
game();