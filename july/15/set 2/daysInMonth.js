'use strict';

function daysInMonth(month, leapYear) {
  switch(month) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    result = `${month} has 31 days`;
    break;
  case 'february':
    if (leapYear) {
      result = 'february has 29 days';
      break;
    } else {
      result = 'february has 28 days';
      break;
    }
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    result = `${month} has 30 days`;
    break;
  default: 
    result = 'Must provide a valid month.';
  }
  return result;
}

console.log(daysInMonth('february'));
console.log(daysInMonth('february', false));
console.log(daysInMonth('february', true));
console.log(daysInMonth('august'));
console.log(daysInMonth('working'));