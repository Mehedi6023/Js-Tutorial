//for loop
console.log(">>>>>for loop");

let arr = ["one", "two", 3, "four"];
for (let i = 0; i <= 3; i++) {
  console.log(`${i} : ${arr[i]}`);
}

//forEach loop used in arrays
console.log(">>>>>forEach loop");

let hobbies = ["reading", "writing", "swimming"];
hobbies.forEach((element, value) => {
  console.log(`${value} : ${element}`);
});

//for in loop used in mainly objects
console.log(">>>>>for in loop");
console.log(">>>>>for in loop in obj");

let person = {
  name: "ovi",
  age: 20,
  email: "fj@email.com",
};

let numbers = ["one", 2, 3, "four"];
for (let key in person) {
  console.log(`${key} : ${person[key]}`);
}
console.log(">>>>>for in loop in array");

for (let index in numbers) {
  console.log(`${index} : ${numbers[index]}`);
}

//for of loop
//for of loop in arrays
console.log(`>>>>>for of loop`);
console.log(`>>>>>for of loop in arrays`);

let personsHobbies = ["Gaming", "walking", "collecting"];
for (let hobbies of personsHobbies) {
  console.log(`${hobbies}`);
}
let str = "JavaScript";
console.log(">>>>>for of loop in string");
for (let char of str) {
  console.log(char);
}
