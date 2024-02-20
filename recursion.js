// var person = {
//     name : "Konchu",
//     age : 33,
//     hobby : "gaming",
// }
// console.log(person.age)


var numObjects =
{
    a: 1,
    b: {
        c: 2
    },
    d: 3,
    e: {
        f: {
            g: 4
        }
    }
}
var numbers = numObjects.e
var newNumbers = numbers.f
var finalNumbers = newNumbers.g
console.log(finalNumbers)