let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('the first promise has resolved');
        resolve(10)
    }, 1000);
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('the second promise has resolved');
        resolve(20)
    }, 2000);
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('the third promise has resolved');
        resolve(30)
    }, 3000);
})


Promise.all([p1, p2, p3]).then((result) => {
    let sum = 0
    result.forEach((value) => {
        sum += value
    })
    console.log(`Results: ${result} ${sum}`);
})
// function createCustomPromise(shouldResolve = true, delay = 1000, value = 'Success!', error = 'Error!') {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(value);
//       } else {
//         reject(error);
//       }
//     }, delay);
//   });
// }