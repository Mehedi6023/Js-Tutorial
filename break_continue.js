//for loop
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
    // break;
  } else {
    console.log("The number is :" + i);
  }
}
// while loop
let j = 11;
while (j <= 20) {
  j++;
  if (j == 15) {
    continue;
    // break;
  } else {
    console.log("The number is : " + j);
  }
}
// do while loop
let k = 21;
do {
  k++;
  if (k == 25) {
    continue;
    // break;
  } else {
    console.log("The number is :" + k);
  }
} while (k <= 30);
