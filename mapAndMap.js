// map: map returns an array according to a condition
// default values: element and index
const numbers = [1, 3, 5, 6, 7]
let number = numbers.map((element, index) => {
    let square = element * element;
    return `${index}: square of ${element} is ${square}`
})
console.log(number);