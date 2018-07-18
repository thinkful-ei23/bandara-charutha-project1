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

const studentData = [
    {
      name: 'Tim',
      status: 'Current student',
      course: 'Biology',
    },
    {
      name: 'Sue',
      status: 'Withdrawn',
      course: 'Mathematics',
    },
    {
      name: 'Liz',
      status: 'On leave',
      course: 'Computer science',
    },
  ];

function enrollInSUmmerSchool(students){
    results = []
  for (let i =0; i<students.length; i++){
    results.push({
        name: students[i].name,
        status: 'in Summer School',
        course: students[i].course
  })
}
  return results
}
console.log(enrollInSUmmerSchool(studentData))