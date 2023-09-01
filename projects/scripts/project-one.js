const startButtonElement = document.querySelector('.js-start-button');
const stopButtonElement = document.querySelector('.js-stop-button');
const buttonHolderElement = document.querySelector('.js-button-holder');
const resetButtonElement = document.querySelector('.js-reset-button');

buttonHolderElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-start-button')) {
        startTimer();
    } else if (event.target.classList.contains('js-stop-button')) {
        stopTimer();
    }
});

resetButtonElement.addEventListener('click', () => {
    resetTimer();
});

let secondCounter;
let = timerObject = {
    hour: 0,
    minute: 0,
    second: 0,
};

function startTimer() {
    let timerObjectJSON = localStorage.getItem('timerObject');

    if (timerObjectJSON === null || timerObjectJSON === undefined) {
        timerObject = JSON.parse(timerObjectJSON);
    }

    // let timerObject = JSON.parse(timerObjectJSON);

    document.querySelector('.js-button-holder').innerHTML = ``;
    document.querySelector(
        '.js-button-holder'
    ).innerHTML = `<button class="js-stop-button">Stop</button>`;

    secondCounter = setInterval(() => {
        timerObject.second++;

        if (timerObject.second === 60 || timerObject.minute === 60) {
            document.querySelector(
                '.js-timer-output'
            ).innerHTML = `<p>${timerObject.hour}:${timerObject.minute}:${timerObject.second}</p>`;
        }

        if (timerObject.second === 60) {
            timerObject.second = 0;

            setTimeout(() => {
                timerObject.minute++;
            }, 1000);
        }
        if (timerObject.minute === 59) {
            timerObject.minute = 0;

            setTimeout(() => {
                timerObject.hour++;
            }, 1000 * 60);
        }
        localStorage.setItem('timerObject', JSON.stringify(timerObject));
    }, 1000);
    return secondCounter;
}

function stopTimer() {
    document.querySelector('.js-button-holder').innerHTML = ``;
    // document.querySelector('.js-timer-output').innerHTML = ``;
    document.querySelector(
        '.js-button-holder'
    ).innerHTML = `<button class="js-start-button">Start</button>`;

    clearInterval(secondCounter);
}

function resetTimer() {
    timerObject.hour = 0;
    timerObject.minute = 0;
    timerObject.second = 0;

    document.querySelector(
        '.js-timer-output'
    ).innerHTML = `<p>${timerObject.hour}:${timerObject.minute}:${timerObject.second}</p>`;
}
