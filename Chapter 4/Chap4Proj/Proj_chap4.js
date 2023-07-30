// Evaluating a number game
// Ask the user to enter a number and check whether it's greater than, equal to, or less
// than a dynamic number value in your code. Output the result to the user.

//Project 1 Code starts here
// let userInput = prompt("Enter a number");
// userInput = Number(userInput);
// let myNum = 15;
// let output;

// if (userInput > myNum) {
//     output = "The number  " + userInput + "  is greater than " + myNum;
// } else if (userInput === myNum) {
//     output = "The number  " + userInput + "  is equal to " + myNum;
// } else {
//     output = "The number " + userInput + " is less than " + myNum;
// }
// console.log(output);

//Project 1 code ends here.
//___________________________________________________________________________________________________________

// Friend checker game
// Ask the user to enter a name, using the switch statement to return a confirmation
// that the user is a friend if the name selected is known in the case statements. You
// can add a default response that you don't know the person if it's an unknown name.
// Output the result into the console.

//Project 2 code starts here....

// let userName = prompt("Enter a name");
// let message;
// switch(userName){
//     case "Jack" :
//         message = "Jack is a friend";
//     break;
//     case "Jill" :
//         message = "Jill is a friend";
//     break;
//     case "Harry" :
//         message = "Harry is a friend";
//     break;
//     case "Sally" :
//         message = "Sally is a friend";
//     break;
//     default :
//         message = "We are not friends yet";
// }

// console.log(message);

// Project 2 code ends here
//__________________________________________________________________________________________________________

// Rock Paper Scissors game
// This is a game between a player and the computer, where both will make a random
// selection of either Rock, Paper, or Scissors (alternatively, you could create a version
// using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and
// Scissors will beat out Paper. You can use JavaScript to create your own version of
// this game, applying the logic with an if statement. Since this project is a little more
// difficult, here are some suggested steps:
// 1. Create an array that contains the variables Rock, Paper, and Scissors.
// 2. Set up a variable that generates a random number 0-2 for the player and then
// do the same for the computer's selection. The number represents the index
// values in the array of the 3 items.
// 3. Create a variable to hold a response message to the user. This can show the
// random results for the player and then also the result for the computer of the
// matching item from the array.
// 4. Create a condition to handle the player and computer selections. If both are
// the same, this results in a tie.
// 5. Use conditions to apply the game logic and return the correct results.
// There are several ways to do this with the condition statements, but you
// could check which player's index value is bigger and assign the victory
// accordingly, with the exception of Rock beating Scissors.
// 6. Add a new output message that shows the player selection versus the
// computer selection and the result of the game.

//Project 3 code starts here.....

// let myArray = ["ROCK", "PAPER", "SCISSORS"];
// let player = Math.random();
// player = player * 2;
// player = Math.floor(player);

// let computer = Math.random();
// computer = computer * 2;
// computer = Math.floor(computer);


// let output = "Player's selection is " + myArray[player] + " vs Computer's selection of " + myArray[computer] + "! "; 
// if (player === computer) { 
//     output += "No winner in this round it is a tie. Try again"; 
// } else if (player > computer) { 
//     if (computer == 0 && player == 2) { 
//         output += "Computer wins this round"; 
//     } else { 
//         output += "Player wins this round "; 
//     } 
// } else { 
//     if (computer == 2 && player == 0) { 
//         output += "Player wins this round"; 
//     } else { 
//         output += "Computer wins this round"; 
//     } 
// } 
// console.log(output);

// Project 3 code ends here.