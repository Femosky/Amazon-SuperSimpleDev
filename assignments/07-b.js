function greet(name) {
    result = `Hello ${name}!`;

    /*
    let unwantedResult = 'Hello undefined!';
    let modifiedResult = result.replace(unwantedResult, 'Hi there!');

    if (result !== unwantedResult) {
        console.log(result);
    } else if (result === unwantedResult){
        console.log(modifiedResult);
    }
    */

    if (!name) {
        console.log(result.replace('Hello undefined!', 'Hi there!'));
    } else {
        console.log(result);
    }
}

greet('Femi');
greet('Tolu');
greet('Tosin');
greet();