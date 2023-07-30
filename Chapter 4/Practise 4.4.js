// 1. Start by setting a variable that gets a random value assigned to it. The value
// is assigned by generating a random number 0-5, for 6 possible results. You
// can increase this number as you add more results.
// 2. Create a prompt that can get a string value input from a user that you can
// repeat back in the final output.
// 3. Create 6 responses using the switch statement, each assigned to a different
// value from the random number generator.
// 4. Create a variable to hold the end response, which should be a sentence
// printed for the user. You can assign different string values for each case,
// assigning new values depending on the results from the random value.
// 5. Output the user's original question, plus the randomly selected case
// response, to the console after the user enters their question.

let randomNumber = Math.random();
randomNumber = randomNumber * 6;
randomNumber = Math.floor(randomNumber);
//const randomNumber = Math.floor(Math.random() * 6);
let userValue = prompt("Enter a day of the week");
let response = "Activity details"

switch (randomNumber){
    case 0:
        response = "You have yoga planned";
        break;
    case 1:
        response = "You have ballroom dancing";
        break;
    case 3:
        response = "You have a dinner date";
        break;
    case 4:
        response = "You have to wash the car";
        break;
    case 5:
        response = "You can binge watch Netflix";
        break;
    case 6:
        response = "Take a nap";
        break;
    default:
        response = "Maybe you would like to choose what you like or try another day of the week";
}
let output = "The day of the week you chose was " + userValue + ". Your activity is " + response ;
console.log(output);


