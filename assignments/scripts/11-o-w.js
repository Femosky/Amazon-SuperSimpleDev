// 11 o-p

const array1 = ["hello", "world", "search", "good"];
let store = -1;

for (let i = 0; i < array1.length; i++) {
  let num = array1[i];

  if (num === "search") {
    store = i;
    break;
  }
}

console.log(store);

// 11 q

function findIndex(array, word) {
  let store = -1;
  for (let i = 0; i < array.length; i++) {
    const num = array[i];

    if (num === word) {
      store = i;
      break;
    }
  }
  console.log(store);
}

findIndex(["green", "red", "blue", "red"], "red");
findIndex(["green", "red", "blue", "red"], "yellow");

// 11 r - s - t - u

function removeEgg(foods) {
  let result = [];
  let eggCounter = 0;

  for (let i = 0; i < foods.length; i++) {
    let reverseFoods = foods.reverse();
    const food = reverseFoods[i];

    if (food === "egg" && eggCounter < 2) {
      eggCounter++
      continue;
    } else {
      result.push(food);
    }
  }

  console.log(result.reverse());
  console.log(foods);
}

removeEgg(["egg", "apple", "egg", "egg", "ham"]);

// Challenge Exercise
// 11 v

let resultU = []

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    resultU.push('FizzBuzz');
  } else if (i % 3 === 0) {
    resultU.push('Fizz');
  } else if (i % 5 === 0) {
    resultU.push('Buzz');
  } else {
    resultU.push(i);
  }
}

for (let i = 0; i <= resultU.length; i++) {
  const value = resultU[i];
  console.log(value);
}

// 11 w
// I no sabi :(

function findIndex1(array, word) {
  let store = -1;
  for (let i = 0; i < array.length; i++) {
    const num = array[i];

    if (num === word) {
      store = i;
      break;
    }
  }
  console.log(store);
  return array;
}

findIndex1(["green", "red", "blue", "red"], "red");
findIndex1(["green", "red", "blue", "red"], "yellow");

const unique = (array, word) => {
  let newArray = findIndex1(array, word);
  let result = [];

  for (let i = 0; i < newArray.length; i++) {
    const value = newArray[i];

    if (value in result) {
      continue; 
    } else {
      result.push(value);
    }
  }

  console.log(result);
};