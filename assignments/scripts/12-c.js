const button = document.querySelector('.button');
const output = document.querySelector('.output');

function changeButtonText() {
    button.innerText = 'Loading...';
    setTimeout(function() {
        button.innerText = 'Finished!';
    }, 1000);
}

let timeoutId;

function addToCart() {
    clearTimeout(timeoutId);

    output.innerText = 'Added';
    timeoutId = setTimeout(function() {
        output.innerText = '';
    }, 2000);
}

