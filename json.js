// let person = {
//     name: "ovi",
//     age: 20,
//     dob: "09/01/2004"
// }
// let convertedPerson = JSON.stringify(person)
// console.log(convertedPerson);
// let convertedPerson2 = JSON.parse(convertedPerson)
// console.log(convertedPerson2);

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(p => console.log(p))