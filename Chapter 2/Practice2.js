let str1 = 'Laurence';
console.log(str1, typeof str1);

let str2 = "Svekis";
console.log(str2, typeof str2);

let val1 = undefined;
console.log(val1, typeof val1);

let val2 = null;
console.log(val2, typeof val2);

let myNum = 1000;
console.log(myNum, typeof myNum);


/*
Variables
Hold values in code

firstname = "Maaike";
x = 2;
And they can be assigned a new value while the code is running:
firstname = "Edward";
x = 7;

The first time you create a variable, you declare it. Keyword to declare: let, var, or const. 
The second time you call a variable, you only use the name of the existing variable to
assign it a new value:
let firstname = "Maria";
firstname = "Jacky";

let nr1 = 12;               local scope - you can only use variables defined with let in the specific block of code in which they were defined
var nr2 = 8;                global scope - you can use the variables defined with var in the entire script
const PI = 3.14159;         constant - const is used for variables that only get a value assigned once. 
                            If you try reassigning a value declared with const, you will get an error.
const someConstant = 3;
someConstant = 4;

Thr above will result in the following output:
Uncaught TypeError: Assignment to constant variable.

__________________________________________________________________________________________________________

Primitive data types
String:

A string is used to store a text value. It is a sequence of characters. There are different
ways to declare a string:
• Double quotes
• Single quotes
• Backticks: special template strings in which you can use variables directly
The single and double quotes can both be used in examples below:

let singleString = 'Hi there!';
let doubleString = "How are you?";

The difference between single quotes and double quotes is that you can use
single quotes as literal characters in double-quoted strings, and vice versa.

let funActivity = 'Let's learn JavaScript';

Let will be recognized as a string, but after that, the characters that follow
cannot be interpreted by JavaScript.If the string is declared using double
quotes, it will not end the string as soon as it hits the single quote, because it is
looking for another double quote. 

The below alternative will work..
let funActivity = "Let's learn JavaScript";

In the same way with double quotes, the following would not work:
let question = "Do you want to learn JavaScript? "Yes!"";

In a string using backticks, you can point to variables and the variable's value will be substituted into the line.
let language = "JavaScript";
let message = `Let's learn ${language}`;
console.log(message);

output :
Let's learn JavaScript
The language variable gets replaced with its value: JavaScript

____________________________________________________________________________________________________________

Escape Characters
special character that can be used to tell JavaScript, "do not take the next character as you normally would.

backslash can be used to ensure your interpreter doesn't see the
single or double quote marks and end either string too early:

let str = "Hello, what's your name? Is it \"Mike\"?";
console.log(str);
let str2 = 'Hello, what\'s your name? Is it "Mike"?';
console.log(str2);

This logs the following to the console:
Hello, what's your name? Is it "Mike"?
Hello, what's your name? Is it "Mike"?

Escape character also will create a line break
with \n, or to include a backslash character in the text with \\:

let str3 = "New \nline.";
let str4 = "I'm containing a backslash: \\!";
console.log(str3);
console.log(str4);

The output of these lines is as follows:
New
line.
I'm containing a backslash: \!

____________________________________________________________________________________________________________

Number
let integerNr = 1;
let decimalNr = 1.5;
let exponentialNr = 1.4e15;
let octalNr = 0o10; 
let hexadecimalNr = 0x3E8; 
let binaryNr = 0b101;

___________________________________________________________________________________________________________
BigInt

A BigInt data type can be recognized by the postfix n:

let bigNr = 90071992547409920n;

calculations between integer Number, intNr, and BigInt, bigNr (uncaught type error)
let result = bigNr + intNr;
The output will be as follows:
Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
You can only operate on BigInt with other BigInts.

____________________________________________________________________________________________________________

Boolean
The Boolean data type can hold two values: true and false
let bool1 = false;
let bool2 = true;

It is used for situations in which you want to store a true or a false value:
For example, whether an element is deleted:
let objectIsDeleted = false;        (The variable suggests that the specified object is not deleted)


Or, whether the light is on or off:
let lightIsOn = true;                 (The variable suggests that the specific light is on)

_____________________________________________________________________________________________________________

Symbol

let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
console.log("These two Symbols are the same:", sym1 === sym2);

Output: These two Symbols are the same: false
Each symbol is unique. Although they contain the same string, they are not the same, and output
false when compared

________________________________________________________________________________________________________________

Undefined
A special data type for a variable that has not been assigned a value

let unassigned;
console.log(unassigned);

The output here will be:
Undefined

Manually assigning undefined is a bad practice -eg checking whether two variables are the same.
If one variable is undefined, and your own variable is manually set to undefined, they will be considered equal
You would need to know whether two values are actually equal, not just that they are both undefined. 

let terribleThingToDo = undefined; (manually assigning - not reccommeded)
_____________________________________________________________________________________________________________

Null
null is a special value for saying that a variable is empty or has an unknown value - always use lower case

let empty = null;

To solve the issue we encountered with setting a variable as undefined - you can set it to null

let terribleThingToDo = undefined;
let lastName;
console.log("Same undefined:", lastName === terribleThingToDo);
output: Same undefined: true

let betterOption = null;
console.log("Same null:", lastName === betterOption);
output: Same null: false

_______________________________________________________________________________________________________________
TypeOf
Returns the type of the variable

let str = "Hello";
console.log("str", typeof str);
output: str string

let nr = 7;
console.log("nr", typeof nr);
output: nr number

let bigNr = 12345678901234n;
console.log("bigNr", typeof bigNr);
output: bigNr bigint

let bool = true;
console.log("bool", typeof bool);
output: bool boolean

let sym = Symbol("unique");
console.log("sym", typeof sym);
output: sym symbol

let undef = undefined;
console.log("undef", typeof undef);
output: undef undefined

let unknown = null;
console.log("unknown", typeof unknown);
output: unknown object

_____________________________________________________________________________________________________________
Converting Data Types

Multiply
let nr1 = 2;                (int)
let nr2 = "2";               (string)
console.log(nr1 * nr2);
output: 4                   (Javascript converted the string to number)

Addition
let nr1 = 2;
let nr2 = "2";
console.log(nr1 + nr2);
output: 22              (The plus sign can be used to concatenate strings - Javqascript converted number to string)

Convert Number to String
let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);
output: 6 string

Convert string to number:
let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr);
output: 12 number

Convert String to Boolean:
let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);
output: true boolean

Convert null to Number:
let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);
output: null 0 number   (null will result in the number 0)

Convert empty string to number:
let strToNr = "";
strToNr = Number(strToNr);
console.log("empty string", strToNr, typeof strToNr);
output: empty string 0 number   (an empty string will result in the number 0)

Convert String with text to number:
let strToNr2 = "hello";
strToNr2 = Number(strToNr2);
console.log(strToNr2, typeof strToNr2);
output: NaN number

String to Boolean:
let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2);
output: true boolean    (Any string will return true when converted to a Boolean, even the string "false"!)

Empty String to Boolean
let strToBool = "";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);
output: false boolean       (An empty string, null, and undefined will lead to a Boolean value of false.)

_________________________________________________________________________________________________________________
Practise Excercise 2.1

let str1 = 'Laurence';
console.log(str1, typeof str1);

let str2 = "Svekis";
console.log(str2, typeof str2);

let val1 = undefined;
console.log(val1, typeof val1);

let val2 = null;
console.log(val2, typeof val2);

let myNum = 1000;
console.log(myNum, typeof myNum);

____________________________________________________________________________________________________________

Operators
Perform calculations.

Arithmetic operators
Arithmetic operators can be used to perform operations with numbers.

Addition
We use + for this operation:
let nr1 = 12;
let nr2 = 14;
let result1 = nr1 + nr2;
output: 26

The + operator can also come in very handy for concatenating strings:
let str1 = "Hello ";
let str2 = "addition";
let result2 = str1 + str2;
output: Hello addition

_____________________________________________________________________________________________________________
Practise Excercise 2.2

let myname = "Natasha";
let age = 42;
let codeJS = Boolean("I can code JavaScript");

console.log("Hello, my name is " + myname + " and I am " + age +" years old. I can code JavaScript : " + codeJS);


______________________________________________________________________________________________________________

Subtraction

let nr1 = 20;
let nr2 = 4;
let str1 = "Hi";
let nr3 = 3;
let result1 = nr1 - nr2;
let result2 = str1 - nr3;
console.log(result1, result2);
output: 16 NaN

______________________________________________________________________________________________________________
Multiplication

we cannot multiply a number and a string in JavaScript

let nr1 = 15;
let nr2 = 10;
let str1 = "Hi";
let nr3 = 3;
let result1 = nr1 * nr2;
let result2 = str1 * nr3;
console.log(result1, result2);
Output: 150 NaN

_______________________________________________________________________________________________________________
Division
A straightforward operator is division. We can divide two numbers with the / character:
let nr1 = 30;
let nr2 = 5;
let result1 = nr1 / nr2;
output : 6
________________________________________________________________________________________________________________

Exponentiation
This can be read as x to the power of y. Multiply x by itself y number of times. we use ** for this

let nr1 = 2;
let nr2 = 3;
let result1 = nr1 ** nr2;
console.log(result1);
output: 8           (The result of this operation is 2 to the power of 3 (2 * 2 * 2), which is 8)
                    The square root of a value is the same as raising it to the power of 0.5)

_________________________________________________________________________________________________________________
Modulus
remainder from division   Character used: % 

let nr1 = 10;
let nr2 = 3;
let result1 = nr1 % nr2;
console.log(`${nr1} % ${nr2} = ${result1}`);
output: 10 % 3 = 1

__________________________________________________________________________________________________________________
Unary operators: increment and decrement

If we see x++, we can read this as x = x + 1. The same is true for the decrement operators: x-- can be read as x = x – 1
let nr1 = 4;
nr1++;
console.log(nr1);
output: 5

let nr2 = 4;
nr2--;
console.log(nr2);
output: 3

Postfix (x++)  
let nr = 2;
console.log(nr++);
console.log(nr);
output :2       (nr gets incremented by 1 after logging)

Prefix (++x)
let nr = 2;
console.log(++nr);
output: 3         (The prefix gets executed before sending the variable through)

_______________________________________________________________________________________________________________
Practise 2.3

 let a = window.prompt("Enter a value ");
 let b = window.prompt ("Enter a second value ");
 
a = Number(a);
b = Number(b);


let hypotenuse = ((a * a) + (b * b))**0.5;
console.log(hypotenuse);

________________________________________________________________________________________________________________
Practise 2.4

let a = 2;
let b = 4;
let c = 10;

add = b+=a;
divide = a/=c;
c = c%b;

console.log(add, divide, c);

__________________________________________________________________________________________________________________
Comparison Operators

Equal  == : equal value only
let x = 5;
let y = "5";
console.log(x == y);

Equal  === : evaluate both the value and the data type to determine whether both sides are equal or not
let x = 5;
let y = "5";
console.log(x === y);

Not Equal != (returns true when two variables are not equal, and false when they are equal)
let x = 5;
let y = "5";
console.log(x != y);
output: false

This will conclude that since x and y have different data types, they are not the
same, and will log true to the console.
let x = 5;
let y = "5";
console.log(x !== y);
output: true

_______________________________________________________________________________________________________________
Logical Operators

And &&
to check whether x is greater than y and y is greater than z, you would need to be able to combine two expressions
let x = 1;
let y = 2;
let z = 3;
console.log(x < y && y < z);
output: true

let x = 1;
let y = 2;
let z = 3;
console.log(x > y && y < z);
output: false    (x is not greater than y, one part of the expression is not true, and therefore it will result in false)

_______________________________________________________________________________________________________________
OR ||
If you want to get true if either one of the expressions is true.

let x = 1;
let y = 2;
let z = 3;
console.log(x > y || y < z);
output: true    (only one of the two sides needs to be true in order for the whole expression to evaluate to true)

console.log(x > y || y > z);
output: false (both sides are false, it will log false)

_______________________________________________________________________________________________________________
NOT !
let x = false;
console.log(!x);
output: true


let x = 1;
let y = 2;
console.log(!(x < y));
output false  (x is smaller than y, so the expression evaluates to true. But, it gets negated due to the exclamation mark and prints false to the console)


__________________________________________________________________________________________________________________
Project 

let miles = 450000;
const converter = 1.60934;
let km = miles * converter;

console.log(" The distance of " + km + "kms is equal to " + miles + " miles");

________________________________________________________________________________________________________________
Project BMI
let height = 100;
let weight = 200;
const heightconverter = 2.54;
const weightconverter = 2.2046;
let newheight = height * heightconverter;
let newweight = weight / weightconverter;

console.log("Height is " + newheight + " cms and weight is " + newweight + " kilos" );

// Then, calculate and log the BMI: this is equal to weight (in kilos) divided by squared height (in meters). 
//Output the results to the console.

const metre = 0.01;
let heightM = newheight * metre;
let square = 2;
let squaredHeight = (heightM ** square);
console.log("BMI is  " + newweight / squaredHeight);
_______________________________________________________________________________________________________________
Self Help Quiz

Self-check quiz
1. What data type is the following variable?
const c = "5";
Ans: String

2. What data type is the following variable?
const c = 91;
Ans: Number

3. Which one is generally better, line 1 or line 2?
let empty1 = undefined; //line 1
let empty2 = null; //line 2
Ans: Line 2

4. What is the console output for the following?
let a = "Hello";
a = "world";
console.log(a);
Ans: world

5. What will be logged to the console?
let a = "world";
let b = `Hello ${a}!`;
console.log(b);
Ans: Hello world

6. What is the value of a?
let a = "Hello";
a = prompt("world");
console.log(a);
Ans: world

7. What is the value of b output to the console?
let a = 5;
let b = 70;
let c = "5";
b++;
console.log(b);
Ans: 71

8. What is the value of result?
let result = 3 + 4 * 2 / 8;
Ans: 4

9. What is the value of total and total2?
let firstNum = 5;
let secondNum = 10;
firstNum++;
secondNum--;
let total = ++firstNum + secondNum;
console.log(total);
let total2 = 500 + 100 / 5 + total--;
console.log(total2);
Ans: 16  and 536

10. What is logged to the console here?
const a = 5;
const b = 10;
console.log(a > 0 && b > 0);
console.log(a == 5 && b == 4);
console.log(true ||false);
console.log(a == 3 || b == 10);
console.log(a == 3 || b == 7);
Ans: True, False, True, True, False

*/