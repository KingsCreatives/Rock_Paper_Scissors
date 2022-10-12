// selecting buttons

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const gameBoard = document.querySelector(".game");
const replayButton = document.querySelector(".replay-btn");


// Who won at the end
const declareWinner = document.querySelector(".final-message");




// Scoreboards
let computerScoreBoard = document.querySelector('.score.computer');
let playerScoreBoard = document.querySelector('.score.user');


let playerScore = 0;
let computerScore = 0;

//choices for user and computer
const options = [rock, paper, scissors];


const message = document.querySelector('.message');



// checking the winner of each round
function roundWinner(user, computer) {
    if (user == computer) {
        message.textContent = ` ${user} ties ${computer}`;

    } else if (user == 'rock' && computer == 'scissors') {
        message.textContent = 'rock beats scissors, You win!';
        playerScore += 1;
        playerScoreBoard.textContent = playerScore;


    } else if (user == 'paper' && computer == 'rock') {
        message.textContent = 'paper beats rock, You win!';
        playerScore += 1;
        playerScoreBoard.textContent = playerScore;


    } else if (user == 'scissors' && computer == 'paper') {
        message.textContent = 'scissors beats paper, You win!';
        playerScore += 1;
        playerScoreBoard.textContent = playerScore;


    } else {
        message.textContent = `${computer} beat ${user}, You loose!`;
        computerScore += 1;
        computerScoreBoard.textContent = computerScore;

    }
}

function game() {
    // user and computer selesction
    options.forEach((occurance) => {
        occurance.addEventListener('click', () => {
            const userSelection = occurance.className;
            const randomIndex = Math.floor(Math.random() * options.length);
            const computerSelection = options[randomIndex].className;
            roundWinner(userSelection, computerSelection);


            function gameOver() {
                if (playerScore == 5 && computerScore < 5) {
                    gameBoard.style.display = "none";
                    declareWinner.textContent = "You Win!";
                    declareWinner.style.fontSize = "5rem";
                    replayButton.style.display = "block";

                } else if (playerScore < 5 && computerScore == 5) {
                    gameBoard.style.display = "none";
                    declareWinner.textContent = "You Loose!";
                    declareWinner.style.fontSize = "5rem";
                    replayButton.style.display = "flex";

                } else {
                    return;
                }
            }
            gameOver();

        });

    });




}


replayButton.addEventListener("click", () => {
    window.location.reload();

})

game();