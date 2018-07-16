'use strict'
function yearOfBirth(age) {
  if (age < 0) {
    throw new Error("Age can not be negative");
  }
  else {return 2018 - age;}
  console.log("I was born in " + yearOfBirth);
}
 
function whoAmI(name, age) {
  if (typeof name !== 'string' || typeof age !== 'number') {
    console.error('Aruments not valid');
  } else {
    console.log("Hi, my name is " + name + " and I'm " + age + " years old");
    let yob = yearOfBirth(age); // #5 no error
  }
}
whoAmI('Charutha', 22);

try {
  // whoAmI('Charutha', -39);
}
catch(err) {
  console.error(err);
}