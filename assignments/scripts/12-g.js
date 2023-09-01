/*
let count = 0;
let interval;

interval = setInterval(function() {
    document.title = `${count} New messages`;
    count++;
    if (count > 11) {
        clearInterval(interval);
    }
    document.querySelector('.output').innerText = 'hello';    
}, 1000);

*/

document.querySelector('.js-button-one').addEventListener('click', () => {
    addMessage();
});
document.querySelector('.js-button-two').addEventListener('click', () => {
    removeMessage();
});

let messages = 1;

let intervalId;

addMessage();

function addMessage() {
    messages++;

    intervalId = setInterval(function () {
        if (document.title === 'App') {
            if (messages === 1) {
                document.title = `(${messages}) New message`;
            } else {
                document.title = `(${messages}) New messages`;
            }
        } else if (messages === 0) {
            clearInterval(intervalId);
            document.title = 'App';
        } else {
            document.title = 'App';
        }
    }, 1000);
}

function removeMessage() {
    messages--;
}
