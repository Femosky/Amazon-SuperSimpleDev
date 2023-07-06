function convertTemperature(degrees, unit) {
    const celsiusToFahrenheit = (degrees * (9 / 5)) + 32;
    const fahrenheitToCelsius = (degrees - 32) * (5 / 9);

    let chosenUnit = unit.toUpperCase();

    if (chosenUnit === 'C') {
        console.log(celsiusToFahrenheit + 'F');
    } else if (chosenUnit === 'F') {
        console.log(fahrenheitToCelsius + 'C');
    } else {
        console.log('Invalid Input. Input Either C or F');
    }


}

convertTemperature(25, 'c');
convertTemperature(86, 'f');