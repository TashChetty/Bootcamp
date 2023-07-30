// 1. Create a variable called prize and use a prompt to ask the user to set the
// value by selecting a number between 0 and 10
// 2. Convert the prompt response to a number data type
// 3. Create a variable to use for the output message containing the value "My
// Selection: "
// 4. Using the switch statement (and creativity), provide a response back
// regarding a prize that is awarded depending on what number is selected
// 5. Use the switch break to add combined results for prizes
// 6. Output the message back to the user by concatenating your prize variable
// strings and the output message string

let prize = prompt("Select a number between 0 and 10");
prize = Number(prize);
let userInput = "My selection:  ";

switch (prize) {
  case 1:
  case 2:
    userInput += (" won a TV");
    break;
  case 3:
  case 4:
    userInput += ("  won a Car");
    break;
  case 5:
  case 6:
    userInput += (" won a Cruise");
    break;
  case 7:
  case 8:
    userInput += (" won a Lawnmower");
    break;
  case 9:
  case 10:
    userInput += ("won 100 000 in cash");
    break;
  default:
    userInput += (" No prize this time");
    break;
}


console.log(userInput);



