const nums = [10, 20, 30];

nums[2] = 99;

console.log(nums);

function getLastValue(array) {
    for (let i = Number(array.length) - 1; i < array.length; i++) {
        console.log(array[i]);
    }
}

getLastValue([1, 20, 22, 24, 5]);
getLastValue(['hi', 'hello', 'good']);

function arraySwap(array) {
    const firstArray = array[0];
    const arrayLength = Number(array.length) -1;

    const lastArray = array[arrayLength];
        
    array[0] = lastArray;
    array[arrayLength] = firstArray;

    console.log(array);
}

arraySwap([1, 20, 22, 24, 5]);
arraySwap(['hi', 'hello', 'good']);

for (let i = 0; i < 11; i += 2) {
    console.log(i);
}

for (let i = 5; i >= 0; i--) {
    console.log(i);
}

let j = 0;

while (j < 11) {
    console.log(j);
    j += 2;
}

let k = 5;

while (k >= 0) {
    console.log(k);
    k--;
}

const array1 = [1, 2, 3];

for (let i = 0; i < array1.length; i++) {
    array1[i] = array1[i] + 1;
}

console.log(array1);

function addOne(array) {
    for (let i = 0; i < array.length; i++) {
        array[i]++;
    }
    console.log(array);
}

addOne([1, 2, 3]);
addOne([-2, -1, 0, 99]);

function addNum(array, num) {
    for (let i = 0; i < array.length; i++) {
        array[i] += num;
    }
}

addNum([1, 2, 3], 2);
addNum([1, 2, 3], 3);
addNum([-2, -1, 0, 99], 2);

function addArrays(array1, array2) {
    let newArray = [];
    for (let i = 0; i < array1.length || i < array2.length; i++) {
        const num = array1[i] + array2[i];
        newArray.push(num);
    }
    console.log(newArray);
}

addArrays([1, 1, 2], [1, 1, 3]);
addArrays([1, 2, 3], [4, 5, 6]);

function countPositive(nums) {
    let newArray = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            newArray.push(i);
        }
    }
    let arrayNum = newArray.length;
    console.log(arrayNum);
}

countPositive([1, -3, 5]);
countPositive([-2, 3, -5, 7, 10]);

function minMax(nums) {
    let larger = nums[0];
    let smaller = nums[0];
    let previousI = '';

    if (nums.length === 0) {
        smaller = 'null';
        larger = 'null';
    }
    for (let i = 0; i < nums.length; i++) {
        if (previousI !== '' && nums[i] > previousI) {
            larger = nums[i];
        } else if (previousI !== '' && nums[i] < previousI) {
            smaller = nums[i];
            
            previousI = nums[i];
        } 
    }

    console.log(`min: ${smaller}, max: ${larger}`);
}

minMax([1, -3, 5]);
minMax([-2, 3, -5, 7, 10]);

minMax([]);
minMax([3]);


//excersie 11n

//this exercise was a problem for me NOT WORKING!

function countWords(words) {
    let count = 0;
    let previousWord = null;
    let counter = [];
    
    let scapeGoat = '';

    let object1 = {
        scapeGoat: 0
    }

    for (let i = 0; i < words.length; i++) {
        if (!previousWord && words[i] === previousWord) {
            if (words[i] in counter) {
                counter.words[i]++;
            }
        }
    }

    let previousValue = '';

    for (let i = 0; i < counter.length; i++) {
        if (counter.some(scapeGoat > previousValue && previousValue !== '')) {
            most = scapeGoat;
        } else if (counter.some(scapeGoat < previousValue && previousValue !== '')) {
            least = scapeGoat;
        }

        previousValue = scapeGoat;

    }
}

countWords(['apple', 'grape', 'apple', 'apple']);
