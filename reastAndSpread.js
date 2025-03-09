//rest operator
function sum(name, ...args){
    let sum = 0
    for(let arg in args){
        sum += args[arg]
    }
    return `${name} : ${sum}`
}
console.log(sum('ovi', 1, 2, 3));
//spread operator
let arr = [4, 5, 6]
console.log(sum('mehedi', ...arr));

let obj1 = {
    name: 'ovi'
}
let obj2 = {
    age: 23
}
let obj3 = {...obj1, ...obj2}
console.log(obj3);