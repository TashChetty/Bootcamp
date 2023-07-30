// if and if else statements 
// decision 

let rain = true;
if(rain){
console.log("** Taking my umbrella when I need to go outside **");
} else {
console.log("** I can leave my umbrella at home **");
}


//if(expression) {
    // code associated with the if block
    // will only be executed if the expression is true
   // } else {
    // code associated with the else block
    // we don't need an else block, it is optional
    // this code will only be executed if the expression is false
   // }

    //___________________________________________________________________________________________________________
    //Practise Excercise 4.1
    //_________________________________________________________________________________________________________
    //else if statements
let age = 10;
let cost = 0;
let message;
if (age < 3) {
cost = 0;
message = "Access is free under three.";
} else if (age >= 3 && age < 12) {
cost = 5;
message ="With the child discount, the fee is 5 dollars";
} else if (age >= 12 && age < 65) {
cost = 10;
message ="A regular ticket costs 10 dollars.";
} else {
cost = 7;
message ="A ticket is 7 dollars.";
}
    console.log(message);
    console.log("Your Total cost "+cost);

//___________________________________________________________________________________________________________________

//Practice exercise 4.2

//____________________________________________________________________________________________________________________________

//Conditional ternary operators

// operand1 ? operand2 : operand3;

// operand1 is the expression that is to be evaluated. If the value of the expression is
// true, operand2 gets executed. 
// If the value of the expression is false, operand3 gets
// executed. 
// You can read the question mark as "then" and the colon as "else" here:
// expression ? statement for true : statement associated with false;

// The template for saying it in your head should be:
// if *operand1*, then *operand2*, else *operand3*

// let access = age < 18 ? "denied" : "allowed";
// This  will assign a value to access. 
// If age is lower than 18, then it will assign the value denied, else it will assign the value allowed. 
// You can also specify an action in a ternary statement, like this:

// age < 18 ? console.log("denied") : console.log("allowed");

//_____________________________________________________________________________________________________________

//Practice exercise 4.3
//__________________________________________________________________________________________________________

//switch statements
// switch(expression) {
//     case value1:
//     // code to be executed
//     break;
//     case value2:
//     // code to be executed
//     break;
//     case value-n:
//     // code to be executed
//     break;
//     }
//      If the expression equals value1, do whatever code is specified for that case. 
//      If the expression equals value2, do whatever code is specified for that case, and so on.

//switch uses strict type checking (the triple equals strategy) to
//determine equality, which checks for both a value and a data type.

//_________________________________________________________________________________________________________
//The default case

switch("Lunch") {
    case "Get up":
    console.log("It is 6:30AM");
    break;
    case "Breakfast":
    console.log("It is 7:00AM");
    break;
    case "Drive to work":
    console.log("It is 8:00AM");
    break;
    case "Lunch":
    console.log("It is 12:00PM");
    break;
    case "Drive home":
    console.log("It is 5:00PM");
    break;
    case "Dinner":
    console.log("It is 6:30PM");
    break;
    default:
    console.log("I cannot determine the current time.");
    break;
    } 
//_____________________________________________________________________________________________________________
//Practise 4.4
//_______________________________________________________________________________________________________________
// random number between 0 and 1
let randomNumber = Math.random();
// multiply by 10 to obtain a number between 0 and 10
randomNumber = randomNumber * 10;
// removes digits past decimal place to provide a whole number
randomNumber = Math.floor(randomNumber);

//____________________________________________________________________________________________________________________

//Combining cases

switch(grade){
    case "F":
    case "D":
    console.log("You've failed!");
    break;
    case "C":
    case "B":
    console.log("You've passed!");
    break;
    case "A":
    console.log("Nice!");
    break;
    default:
    console.log("I don't know this grade.");
    }
//_______________________________________________________________________________________________________________
//     //Practice exercise 4.5
//     1. Create a variable called prize and use a prompt to ask the user to set the
// value by selecting a number between 0 and 10
// 2. Convert the prompt response to a number data type
// 3. Create a variable to use for the output message containing the value "My
// Selection: "
// 4. Using the switch statement (and creativity), provide a response back
// regarding a prize that is awarded depending on what number is selected
// 5. Use the switch break to add combined results for prizes
// 6. Output the message back to the user by concatenating your prize variable
// strings and the output message string
//__________________________________________________________________________________________________________

// Go to Projects