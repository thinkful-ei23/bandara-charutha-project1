'use strict'
function yearOfBirth(age) {
  let yearOfBirth = 2018 - age;
  console.log("I was born in " + yearOfBirth);
}
 
function whoAmI(name, age) {
  console.log("Hi, my name is " + name + " and I'm " + age + " years old");
  let yob = yearOfBirth(age);
}
whoAmI('Charutha', 22);

