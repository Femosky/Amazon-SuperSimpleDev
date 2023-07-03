function convertToFahrenheit(celsius) {
    fahrenheit = (celsius * (9/5)) + 32;
    return fahrenheit;
}
function convertToCelsius(fahrenheit) {
    celsius = (fahrenheit -32) * (5/9);
    return celsius;
}

let fahrenheitAnswer = convertToFahrenheit(25);
let celsiusAnswer = convertToCelsius(86);

console.log(fahrenheitAnswer);
console.log(celsiusAnswer);