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

let timerObject = JSON.parse(localStorage.getItem('timerObject')) || {
    hour: 0,
    minute: 0,
    second: 0,
};

let defaultFormattedHour = String(timerObject.hour).padStart(2, '0');
let deafaultFormattedMinute = String(timerObject.minute).padStart(2, '0');
let defaultFormattedSecond = String(timerObject.second).padStart(2, '0');

document.querySelector(
    '.js-timer-output'
).innerHTML = `<p class="timer-output-paragraph">${defaultFormattedHour}:${deafaultFormattedMinute}:${defaultFormattedSecond}</p>`;

localStorage.setItem('timerObject', JSON.stringify(timerObject));

function startTimer() {
    document.querySelector('.js-button-holder').innerHTML = ``;

    document.querySelector(
        '.js-button-holder'
    ).innerHTML = `<button class="js-stop-button stop-button" data-type="inverted">Stop</button>`;

    secondCounter = setInterval(() => {
        timerObject.second++;

        if (timerObject.second === 60) {
            timerObject.second = 0;
            timerObject.minute++;
        }

        if (timerObject.minute === 60) {
            timerObject.minute = 0;
            timerObject.hour++;
        }

        let formattedHour = String(timerObject.hour).padStart(2, '0');
        let formattedMinute = String(timerObject.minute).padStart(2, '0');
        let formattedSecond = String(timerObject.second).padStart(2, '0');

        document.querySelector(
            '.js-timer-output'
        ).innerHTML = `<p class="timer-output-paragraph">${formattedHour}:${formattedMinute}:${formattedSecond}</p>`;

        localStorage.setItem('timerObject', JSON.stringify(timerObject));
    }, 1000);

    return secondCounter;
}

function stopTimer() {
    document.querySelector('.js-button-holder').innerHTML = ``;

    document.querySelector(
        '.js-button-holder'
    ).innerHTML = `<button class="js-start-button start-button" data-type="inverted">Start</button>`;

    clearInterval(secondCounter);
}

function resetTimer() {
    timerObject.hour = 0;
    timerObject.minute = 0;
    timerObject.second = 0;

    let formattedHour = String(timerObject.hour).padStart(2, '0');
    let formattedMinute = String(timerObject.minute).padStart(2, '0');
    let formattedSecond = String(timerObject.second).padStart(2, '0');

    document.querySelector(
        '.js-timer-output'
    ).innerHTML = `<p class="timer-output-paragraph">${formattedHour}:${formattedMinute}:${formattedSecond}</p>`;

    localStorage.setItem('timerObject', JSON.stringify(timerObject));
}
