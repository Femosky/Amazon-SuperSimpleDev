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

let messages = 2;

let interval;

function addMessage() {
    interval = setInterval(function() {
        document.title = `(${messages}) New messages`;
        count++;
    }, 1000);
}