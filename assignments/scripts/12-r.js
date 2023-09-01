let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
};

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

// const autoPlay = () => {

// };

document.querySelector('.js-auto-play-button').addEventListener('click', () => {
    autoPlay();
});
document
    .querySelector('.js-reset-score-button')
    .addEventListener('click', () => {
        resetScorePrompt();
    });

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'a' || event.key === 'A') {
        autoPlay();
    }
});
document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
        resetScorePrompt();
    }
});

function autoPlay() {
    if (!isAutoPlaying) {
        document.querySelector('.js-auto-play-button').innerHTML =
            'Stop Playing';

        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    } else {
        document.querySelector('.js-auto-play-button').innerHTML = 'Auto Play';
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('paper');
});
document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('scissors');
});

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r' || event.key === 'r'.toUpperCase()) {
        playGame('rock');
    } else if (event.key === 'p' || event.key === 'p'.toUpperCase()) {
        playGame('paper');
    } else if (event.key === 's' || event.key === 's'.toUpperCase()) {
        playGame('scissors');
    }
});

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose';
        } else if (computerMove === 'paper') {
            result = 'You win';
        } else if (computerMove === 'scissors') {
            result = 'Tie';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win';
        } else if (computerMove === 'paper') {
            result = 'Tie';
        } else if (computerMove === 'scissors') {
            result = 'You lose';
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You lose';
        } else if (computerMove === 'scissors') {
            result = 'You win';
        }
    }

    if (result === 'You win') {
        score.wins += 1;
    } else if (result === 'You lose') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }

    let newResult = `You
    <img src="/images/${playerMove}-emoji.png" alt="" class="move-icon-two">
    <img src="/images/${computerMove}-emoji.png" alt="" class="move-icon-two">
    Computer`;

    updateResult(result);
    updateMoves(playerMove, computerMove, newResult);
    updateScoreElement();

    localStorage.setItem('score', JSON.stringify(score));
}

function updateResult(result) {
    document.querySelector('.js-result').innerHTML = result;
}
function updateMoves(playerMove, computerMove, newResult) {
    document.querySelector('.js-moves').innerHTML = newResult;
}
function updateScoreElement() {
    const updateScore = (document.querySelector(
        '.js-score'
    ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function resetScorePrompt() {
    document.querySelector('.js-reset-confirmation-popup').innerHTML = `
        <div class="reset-confirmation-block">
            <p>Are you sure you want to reset the score?</p>
            <div>
                <button onclick="
                    resetScore();
                    setTimeout(() => document.querySelector('.js-reset-confirmation-popup').innerHTML = '', 1000);
                " class="js-reset-yes-button reset-confirmation-button">Yes</button>
                <button onclick="document.querySelector('.js-reset-confirmation-popup').innerHTML = '';" class="js-reset-no-button reset-confirmation-button">No</button>
            </div>
        </div>
    `;
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    updateResult('');
    updateMoves('', '', '');

    updateScoreElement();
    localStorage.removeItem('score');
}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}
