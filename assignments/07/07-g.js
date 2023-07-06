const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');

const dot = document.getElementById('.');

const plus = document.getElementById('+');
const minus = document.getElementById('-');
const multiply = document.getElementById('*');
const divide = document.getElementById('/');
const equalTo = document.getElementById('=');


const clear = document.getElementById('clear');

const oneC = one.textContent;
const twoC = two.textContent;
const threeC = three.textContent;
const fourC = four.textContent;
const fiveC = five.textContent;
const sixC = six.textContent;
const sevenC = seven.textContent;
const eightC = eight.textContent;
const nineC = nine.textContent;
const zeroC = zero.textContent;

const dotC = dot.textContent;

const plusC = plus.textContent;
const minusC = minus.textContent;
const multiplyC = multiply.textContent;
const divideC = divide.textContent;
const equalToC = equalTo.textContent;

const clearC = clear.textContent;

one.addEventListener('click')


function saveButtonValue(button) {
  var buttonValue = button.textContent;
  console.log(buttonValue); // Output: "hello"

  // You can further process the buttonValue variable as needed
}

saveButtonValue();

