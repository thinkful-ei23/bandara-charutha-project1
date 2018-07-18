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
// console.log(Object.keys(Object1));