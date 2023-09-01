const button = document.querySelector('.button');
const output = document.querySelector('.output');

document.querySelector('.js-button-one').addEventListener('click', () => {
    changeButtonText();
});
document.querySelector('.js-button-two').addEventListener('click', () => {
    addToCart();
});

function changeButtonText() {
    button.innerText = 'Loading...';
    setTimeout(function () {
        button.innerText = 'Finished!';
    }, 1000);
}

let timeoutId;

function addToCart() {
    clearTimeout(timeoutId);

    output.innerText = 'Added';
    timeoutId = setTimeout(function () {
        output.innerText = '';
    }, 2000);
}
