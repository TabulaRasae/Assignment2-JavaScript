//forEach() Function 1

console.log('Function 1')
function myEach(arr, callback){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i], i, arr);
    }
};

let numbers = [1,2,3,4,5];

function printNumber(number){
    console.log(number);
}

myEach(numbers, printNumber);

//map() Function 2
console.log('Function 2')
function myMap(arr, callback){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result[i] = callback(arr[i],i,arr)
    }
    return result;
};

let numbers2 = [1,2,3];

function doubleNum(number){
    number *= 2;
    console.log(number);
};

myMap(numbers2, doubleNum);

//Filter Function 3
console.log('Function 3')
function myFilter(arr, callback){
    let filteredResult = [];
    for(let i = 0; i < arr.length; i++){
        if (callback(arr[i],i,arr)){
            filteredResult.push(arr[i]);
        }
    }
    return filteredResult;
};

let numbers3 = [1,8,3,15,22,10];

function isEven(number){
    return number % 2 === 0;
}

let evenNumbers = myFilter(numbers3, isEven);

console.log(evenNumbers);

//function 4 some()
console.log('Function 4')
function myAny(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

let numbers4 = [1,4,7,11,17];

console.log(myAny(numbers4, isEven));

//function 5 every()
console.log('Function 5')
function myEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
        return false
        }
    }
    return true;
}

function isEven(number){
    return number % 2 === 0;
}

let numbers5 = [1,2,6];

console.log(myEvery(numbers5, isEven));

//Function 6 reduce()
console.log('Function 6')
function myReduce(arr, callback) {
    let final = null;
    for(let i = 0; i < arr.length; i++){
        final += callback(arr[i], i, arr);
    }
    return final;
}

function sum(number)
{
    let sum = null;
    sum += number;
    return sum;
}

let numbers6 = [1,2,3,4,5];

console.log(myReduce(numbers6, sum));

//function 7 includes()
console.log('Function 7')
function myIncludes(arr, key){
    for(let i=0; i < arr.length; i++){
        if (arr[i] === key){
            return true;
        }
    }
    return false;
}

let fruits = ['apple','banana','pear'];

console.log(myIncludes(fruits, 'pear'));

//function 8 indexof()
console.log('Function 8');
function myIncludes(arr, key){
    for(let i=0; i < arr.length; i++){
        if (arr[i] === key){
            return i;
        }
    }
    return -1;
}

let fruits2 = ['apple','banana','pear'];

console.log(myIncludes(fruits, 'pear'));

//function 9 push()
console.log('function 9');
function myPush(arr, element){
    let lastindex = arr.length;
    arr[lastindex] = element
    return arr.length
}

let animals = ['pig', 'cow'];
console.log(myPush(animals,'goat'));
console.log(animals);

//function 10 lastIndexOf()
console.log('function 10');
function myLastIndexOf(arr, element){
    let startPos = (arr.length - 1);
    for(i = startPos; i > -1; i--){
        if(arr[i] === element){
            return i;
        }
    }
    return -1;
}

let animals2 = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(myLastIndexOf(animals2, 'Dodo'));

//function 11 object.Keys()
console.log('function 11');
const object1 = {
    a: "some string",
    b: 42,
    c: false,
};

Object.getKeys = function(obj){
keysArr = [];
for (key in obj){
    keysArr.push(key);
}
return keysArr;
};

console.log(Object.getKeys(object1));

//function 12 object.Values
console.log('function 12');

Object.getValues = function(obj){
valuesArr = [];
for (key in obj){
    valuesArr.push(obj[key]);
}
return valuesArr;
};

console.log(Object.getValues(object1));

//Function 13 Sum of Range
console.log('function 13');
function range(start, end, step = 1){
    const numbers = [];

    if(step === 0){
        step = (start < end) ? 1:-1;
    }else if (step > 0 && start > end){
        return[];
    }else if (step < 0 && start < end){
        return [];
    }

    if(step > 0){
        for (let i = start; i <= end; i+= step){
            numbers.push(i);
        }
    }else{
        for(let i = start; i >= end; i += step){
            numbers.push(i);
        }
    }
    return numbers;
}

function sum(numbers){
    let total = 0;
    for (let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    return total;
}

console.log(sum(range(1,10)));
console.log(range(5,2,-1));

//function 14 reverse array
console.log('function 13');

function reverseArray(arr){
    newArray = [];
    for(let i = arr.length - 1; i >=0; i--){
        newArray.push(arr[i]);
    }
    return newArray;
}

function reverseArrayInPlace(arr){
    for (let i = 0; i < Math.floor(arr.length/2); i++){
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

let originalArray = [1,2,3,4,5];

//does not change the orignal array
console.log(originalArray);
console.log(reverseArray(originalArray));
//changes the original array
console.log(reverseArrayInPlace(originalArray));
console.log(originalArray);

//function 15 A list
console.log('function 14');
function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  const arr = [];
  let current = list;

  while (current !== null) {
    arr.push(current.value);
    current = current.rest;
  }
  return arr;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

function nth(list, position) {
  let current = list;
  let currentIndex = 0;

  while (current !== null) {
    if (currentIndex === position) {
      return current.value;
    }
    current = current.rest;
    currentIndex++;
  }
  return undefined;
}

function nthRecursive(list, position) {
  if (list === null) {
    return undefined;
  }
  if (position === 0) {
    return list.value;
  }
  return nthRecursive(list.rest, position - 1);
}

console.log(arrayToList([10,20]));
console.log(listToArray(arrayToList([10,20,30])));
console.log(prepend(10,prepend(20,null)));
console.log(nth(arrayToList([10,20,30]),1));

//function 15 Deep Comparison
console.log('Function 15');

function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" ||
    b == null || typeof b != "object") {
    return false;
  }

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj,obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object:2}));

//Function 16 Given an array nums, write a function to move all 0s to the end of it
//While maintaining the relative order of the non-zero elements.
console.log('Functino 16');

/* Put your code here */
