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
  if (j == 15) {
    j++;
    continue;
    // break;
  } else {
    console.log("The number is : " + j);
    j++;
  }
}
// do while loop
let k = 21;
do {
  if (k == 25) {
    k++;
    continue;
    // break;
  } else {
    console.log("The number is :" + k);
    k++;
  }
} while (k <= 30);
