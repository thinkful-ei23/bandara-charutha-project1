function makeStudentReport(data) {
    const results = [];
    for (i = 0; i < data.length; i++) {
        const item = data[i];
        results.push(`${item.name}: ${item.grade}`);
    }
    return results;
}

const testData = [
    { name: 'Jane Doe', grade: 'A' },
    { name: 'John Dough', grade: 'B' },
    { name: 'Jill Do', grade: 'A' },
  ];

console.log(makeStudentReport(testData));
