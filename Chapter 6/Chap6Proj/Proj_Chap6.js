// Create a recursive function
// Create a recursive function that counts up to 10. Invoke the function with different
// start numbers as the arguments that are passed into the function. The function
// should run until the value is greater than


// const num = function counter(i) {
// console.log(i);
// if (i < 10) {
//     return counter(i + 1);
// }
// return;
// }
// num(0);

//________________________________________________

//Proj 2
// Set timeout order
// Use the arrow format to create functions that output the values one and two to the
// console. Create a third function that outputs the value three to the console, and then
// invokes the first two functions.
// Create a fourth function that outputs the word four to the console and also use
// setTimeout() to invoke the first function immediately and then the third function.

const value1  = ()=> console.log('one'); 
const value2  = ()=> console.log('two'); 
const value3 = () =>{
    console.log('three'); 
    value1(); 
    value2(); 
}
const value4 = () =>{
    console.log('four');  
    setTimeout(value1,0); 
    value3();
}
value4();

