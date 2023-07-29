const myArray = [
    10,
    20,
    30
];
console.log(myArray);

console.log(myArray[4]);
myArray[0] = 99;
console.log(myArray)

// [1, 'hello', true, { name: 'socks' }, [1, 2]]

console.log(typeof [1, 2]);
console.log(Array.isArray([1, 2]))

console.log(myArray.length);

myArray.push(100);
console.log(myArray);

myArray.splice(0, 1);
console.log(myArray);