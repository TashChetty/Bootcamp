// Practice exercise 6.1
// See if you can write a function for yourself. We want to write a function that adds
// two numbers.
// 1. Create a function that takes two parameters, adds the parameters together,
// and returns the result.
// 2. Set up two different variables with two different values.
// 3. Use your function on the two variables, and output the result using
// console.log.
// 4. Create a second call to the function using two more numbers as arguments
// sent to the function.


function adNumbers(p1, p2) {        //function
    return p1 + p2;
}
let num1 = 3;                       //variable 1
let num2 = 4;                       // variable 2
console.log(adNumbers(num1, num2)); //function is used on variables and result output
console.log(adNumbers(5, 6));       //second xall to function with two diff numbers