const output = document.querySelector(".output");
const sameClass = document.querySelector('.js-same-class');
let prevToggledButton = null;

function test() {
  if (document.classList.contains("js-button")) {
    output.innerHTML = "Works";
  }
}

function toggleSwitch(selector) {
  const buttonSwitch = document.querySelector(selector);

  // if (sameClass.classList.contains('is-toggled')) {
  //   sameClass.classList.remove('is-toggled');
  // }

  if (prevToggledButton && prevToggledButton !== buttonSwitch) {
    prevToggledButton.classList.remove('is-toggled');
  }

  if (buttonSwitch.classList.contains('is-toggled')) {
    buttonSwitch.classList.remove('is-toggled');
  } else {
    buttonSwitch.classList.add('is-toggled');
  }

  prevToggledButton = buttonSwitch;
}