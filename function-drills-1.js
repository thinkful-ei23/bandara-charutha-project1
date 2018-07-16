'use strict'

function whoAmI(name, age) {
  console.log("Hi, my name is " + name + " and I'm " + age + " years old");
  let yearOfBirth = 2018 - age;
  console.log("I was born in " + yearOfBirth);
}

console.log(whoAmI("charutha", 22));