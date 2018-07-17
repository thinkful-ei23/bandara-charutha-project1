// 1
function repeat(fn, n) {
    for (let i = 0; i < n; i++) {
      fn();
    }
  };
  
  
  function hello() {
    console.log("Hello " + "world"); 
  }
  
  function goodbye() {
    console.log("Goodbye " + "world");
  }
  
  repeat(hello, 5);
  repeat(goodbye, 5);

//2
// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i])) {
        newArray.push(arr[i]);
      }
    }
    return newArray;
  }

const test1 = filter(myNames, function(name) {
      return name[0] === 'J'; // Returns names that begin with J
  });
console.log(test1);

// Bonus
const test2 = filter(myNames, name => name[0] === 'R');
console.log(test2);

// 3
function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    return function(location) {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        if (warningCounter === 1) {
            console.log(`The ${typeOfWarning} hazard alert has triggerd ${warningCounter} time today!`)
        }
        else {console.log(`The ${typeOfWarning} hazard alert has triggerd ${warningCounter} times today!`)}
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const mudSlideWarning = hazardWarningCreator('Mudslide on the road');
const iceWarning = hazardWarningCreator('Ice on the road');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
mudSlideWarning('First St');

// 4
let turtle1 = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

turtle2 = turtle1.filter(step => step[0] >= 0 && step[1] >= 0);
console.log(turtle2);

// Alternate method without arrow function
let turtle3 = turtle1.filter(function(direction) {
    return direction[0] >= 0 && direction[1] >= 0;   
})

console.log(turtle3);

totalSteps = turtle1.map(step => step[0] + step[1]);

console.log(totalSteps);

totalSteps.forEach(step => {console.log(step);
});

// 5
const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
const message = input.split(' ').reduce((resultString, word) => {
        if (word.length === 3) {
            return resultString + ' ';
        }

        else {
            return resultString + word[word.length - 1].toUpperCase();
        }
    }, '');
console.log(message);