// Practice exercise 6.2
// We are going to create a program that will randomly describe an inputted name.
// 1. Create an array of descriptive words.
// 2. Create a function that contains a prompt asking the user for a name.
// 3. Select a random value from the array using Math.random.
// 4. Output into the console the prompt value and the randomly selected array
// value.
// 5. Invoke the function.


const words = ["HAPPY", "FRIENDLY", "SMART"];   //array with descriptive words
 
function userName() {                           // function containing promt asking user for a name
    const userInput = prompt("What is your name?");
    const randomWord = Math.floor(Math.random() * words.length);        //selecting a random value from words
    console.log("You are " + words[randomWord] + " " + userInput );     //output to console
}
userName();                                                             //invoking function
