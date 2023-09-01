/*
const multiply = (value1, value2) => {
    return value1 * value2;
};

console.log(multiply(2, 3));
console.log(multiply(7, 10));
*/

const multiply = (value1, value2) => value1 * value2;

console.log(multiply(2, 3));
console.log(multiply(7, 10));

function countPositive(nums) {
    let postiveNumbers = 0;

    nums.forEach((num) => {
        if (num >= 0) {
            postiveNumbers++;
        }
    });

    return postiveNumbers;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

function addNum(array, num) {
    return array.map((value) => (value += num));
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));

function removeEgg(foods) {
    return foods.filter((food) => food !== 'egg');
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

function removeEgg2(foods) {
    let eggCounter = 0;

    return foods.filter((food) => {
        if (food !== 'egg') {
            return true;
        } else if (food === 'egg' && eggCounter < 2) {
            eggCounter++;
            return true;
        }
    });
}

console.log(removeEgg2(['egg', 'apple', 'egg', 'egg', 'ham']));
