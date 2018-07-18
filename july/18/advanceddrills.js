const loaf = {
    flour: 300,
    water: 210,
    hydration:function(){
        return loaf.water / (loaf.flour *100)
    }
}
console.log( loaf.flour, loaf.water)

console.log(loaf.hydration())

// 2
const object1 = {
    foo: 'foo',
    bar: 'bar',
    fum: 'fum',
    quux: 'quux',
    spam: 'spam'
}

function loopObject1(data) {
    for (let word in data) {
        const value = data[word];
        console.log(word+ ": " + value);
    } 
}

loopObject1(object1) 


const object2 = {
    meals: [ 'breakfast','second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}

console.log(object2.meals[3])

// 4

const arrOfObj = [
    {
        name: 'Woody',
        jobTitle: 'Cowboy',
        boss: 'Mr. Potato head'
    },
    {
        name: 'Buzz Aldrin',
        jobTitle: 'Astronaut',
        boss: 'Mr. Potato head'
    },
    {
        name: 'Mr. Potato head',
        jobTitle: 'Potato',
        boss: 'Mr. Potato head'
    }  
];

//arrOfObj.forEach(function(person) {
//  console.log(person);
//});

arrOfObj.forEach(function(person){
if(person.boss != person.name){
    console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}`)
}
else {
console.log(`${person.jobTitle} ${person.name} doesn't report to anybody` )
}
})

//6 
const cipher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

let message = 'craft block argon meter bells brown croon droop';

function decode(sentence) {
    const newArray = sentence.split(" ");
    const decodedLetters = newArray.map( function(word) {
        let firstLetter = word[0];
        let letterValue = cipher[firstLetter];
        if (letterValue === undefined) {
            return ' '
        }
        else {
            return word[letterValue];
        }
    });
    return decodedLetters.join("");
}

console.log(decode(message));



