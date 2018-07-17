function average(numbers) {
    let sum = 0;
    numbers.forEach(function(numbers) {
        sum += numbers;
    });
    return sum/numbers.length;
  }

const numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(average(numList1));