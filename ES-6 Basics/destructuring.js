//array destructuring
const numbers = [1,2,3];
[num1,num2] = numbers;
[num1,,num3] = numbers
console.log(num1,num2)
console.log(num1,num3)