/*
1. Create an array containing three values: 1, 2, and 3.
2. Nest the original array into a new array three times.
3. Output the value 2 from one of the arrays into the console.
*/

let array1 = [1,2,3];
let array2 = [array1, array1, array1];
let value2 = array2 [0][1];
console.log(value2);
