// for(let i = 0; i < 5; i++){
//     const btnGame = document.getElementById('start-button');
//     btnGame.innerText = i;
//     btnGame.addEventListener('click', function() {
//         game()
//     });
// }




function startGame() {
    game();
}

function game() {

    document.getElementById('rock').onclick = userSelect;
    document.getElementById('paper').onclick = userSelect;
    document.getElementById('scissors').onclick = userSelect;

    function userSelect() {
        
        let playerSelection = this.id;
        const computerSelection = computerPlay();

        const userDisplay = document.querySelector('#user-display');
        const content = document.createElement('content');
        content.classList.add('content');
        content.textContent = `User: ${playerSelection}`;

        userDisplay.appendChild(content);

        function computerPlay() {
            let compChoice = Math.floor(Math.random() * 3) + 1;
            if (compChoice === 1) return 'rock';
            if (compChoice === 2) return 'paper';
            if (compChoice === 3) return 'scissors';
        };

        const compDisplay = document.querySelector('#comp-display');
        const compContent = document.createElement('comp-content');
        compContent.classList.add('comp-content');
        compContent.textContent = `Computer: ${computerSelection}`;

        compDisplay.appendChild(compContent);

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
        }

        // console.log(playRound(playerSelection, computerSelection));
        const gameDisplay = document.querySelector('#game-display');
        const gameContent = document.createElement('comp-content');
        gameContent.classList.add('comp-content');
        gameContent.textContent = playRound(playerSelection, computerSelection);

        gameDisplay.appendChild(gameContent);
    }
}