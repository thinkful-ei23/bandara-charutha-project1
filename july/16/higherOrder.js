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