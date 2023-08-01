// Practice exercise 5.6
// This exercise will construct an array as it loops through the incrementing values of
// x. Once the array is done, this exercise also will demonstrate several ways to output
// array contents.
// 1. Create an empty array
// 2. Run a loop 10 times, adding a new incrementing value to the array
// 3. Log the array into the console
// 4. Use the for loop to iterate through the array (adjust the number of iterations
// to however many values are in your array) and output into the console
// 5. Use the for of loop to output the value into the console from the array

const myArray = [];                 //empty array
for (let x = 0; x < 10; x++) {      // loop 10 times incrementing value to array
    myArray.push(x + 1);            
}
console.log(myArray);           // log the array to consol.
 
for (let i = 0; i < myArray.length; i++) {  //for loop iterating through array
    console.log(myArray[i]);                
}
for (let val of myArray) {              // for loop to output value into console from array
    console.log(val);
}
