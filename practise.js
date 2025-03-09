class user{
    constructor(name, age){
        this.userName = name;
        this.userAge = age;
    }
    greeting(){
        console.log(`Hello ${this.userName} you are ${this.userAge} old`);
    }
}
class customer extends user{
    constructor(name, age, dob, email){
        super(name);
        this.dateOfBath = dob;
        this.userEmail = email;
    }
    details(){
        console.log(`Hello ${this.userName} you are no age old and your dob is ${this.dateOfBath} and your email is ${this.userEmail}`);
    }
}
let user1 = new user('ovi', 25)
let customer1 = new customer('ovi', 25, '23,24,53', 'ovi@gmail.com')
user1.greeting()
customer1.details()
export const people = {
    name: 'ovi',
    age: 23,
    1: 100
}
console.log(people[1]);
let {name: peopleName, age: peopleAge} = people
console.log(peopleName, peopleAge);
let a = 5;
let b = a;
a = 10;
console.log(a,b);