/*
const basketball = {
    price: 2095
};
console.log(basketball);

basketball.price += 500;
console.log(basketball.price);

basketball['delivery-time'] = '3 days';
console.log(basketball);
*/

let product1 = {
    name: 'Product one',
    price: 5
};
let product2 = {
    name: 'Product one',
    price: 5
};

function comparePrice(product1, product2) {
    if (product1.price > product2.price) {
        return true;
    } return false;
}

if (comparePrice(product1, product2)) {
    console.log(`${product2.name} is less expensive`);
} else {
    console.log(`${product1.name} is less expensive`);
}

function isSameProduct(product1, product2) {
    if ((product1.name === product2.name) && (product1.price === product2.price)) {
        return true;
    } else {
        return false;
    }
}

console.log(isSameProduct(product1, product2));

let string1 = 'Good Morning';
console.log(string1.toLowerCase());
 
let string2 = 'test';
let repeatedStr = string2 * 2;
console.log(string2 * 2);
console.log(repeatedStr);
console.log(string2.repeat(2));
