let output = document.getElementById("output");
let calculation = localStorage.getItem("calculation") || "0";

displayCalculation();

function saveCalculation() {
  localStorage.setItem("calculation", calculation);
}

function updateCalculation(value) {
  if (output.innerHTML === "0") {
    calculation = "";
    displayCalculation();
  }

  calculation += value;
  displayCalculation();
  saveCalculation();
}

function equalTo() {
  calculation = eval(calculation);
  displayCalculation();
  saveCalculation();
}

function clearOut() {
  calculation = "0";
  displayCalculation();
  saveCalculation();
}
function clearZero() {
  calculation = "0";
  displayCalculation();
  saveCalculation();
}
function displayCalculation() {
  output.innerHTML = calculation;
}
