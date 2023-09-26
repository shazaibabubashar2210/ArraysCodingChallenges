// Task01
console.log(
  "==========================Task 01=================================="
);
let arr = [];
for (let i = 0; i < 5; i++) {
  let num = Number(prompt("Enter five numbers to print sum", ""));
  arr.push(num);
}
let sum1 = 0;
for (let i = 0; i < 5; i++) {
  sum1 += arr[i];
}
console.log(`Sum = ${sum1}`);
console.log(
  "==========================Task 02=================================="
);
let findMax = (maxarr) => {
  let max = -12334455;
  for (let i = 0; i < maxarr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
};
let maxarr = [1, 2, 3, -1, 2];
let getmax = findMax(arr);
console.log("Maximum Element is", getmax);

console.log(
  "==========================Task 03=================================="
);
let word = prompt("Enter a sentence to find the lenght", "");
let updatedWord = word.split(" ");
console.log(`The length of the array is now ${updatedWord.length}`);
console.log(
  "==========================Task 04=================================="
);
let arr1 = [];
let sum = 0;
let count = 0;
let num1 = prompt("Enter how many elements you wanna enter in an array", "");
for (let i = 0; i < num1; i++) {
  let num2 = Number(prompt(`Enter element ${i + 1}`));
  arr1.push(num2);
}
for (let i = 0; i < num1; i++) {
  sum += arr1[i];
  count++;
}
let avg = sum / count;
console.log(`Average = ${avg}`);

console.log(
  "==========================Task 05=================================="
);

let numArr = [];
let number1 = prompt("Enter how manny elements in an array", "");
if (number1 === "") {
  alert("Wrong Input");
}
for (let i = 0; i < number1; i++) {
  let number2 = Number(prompt("Enter element", i + 1, ""));
  numArr.push(number2);
}
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] % 3 === 0 || numArr[i] % 5 === 0) {
    console.log(`Elements that are divisible by 3 or 5 are ${numArr[i]}`);
  }
}
