//while loops
//executes a certain block of code as long as an expression evaluates to true

while (condition) {
    // code that gets executed as long as the condition is true
    }

//example of a while loop printing the numbers 0 to 10 (excluding 10) to the console:
//1. Create a variable, i, and set its value to zero. 
//2. Start the while loop and check the condition that the value of i is smaller than 10
let i = 0;
while (i < 10) {
console.log(i);
i++;
}

// 3. Since the condition is true, the code logs i and increases i by 1
// 4. The condition gets evaluated again; 1 is still smaller than 10
// 5. Since the condition is true, the code logs i and increases i by 1
// 6. The logging and increasing continues until i becomes 10
// 7. 10 is not smaller than 10, so the loop ends

//_____________________________________________________________________________________________________
//Practise 5.1 while loop - condition evaluates to true then loop stops.
//______________________________________________________________________________________________________
//do while loops
//code block to be executed at least once
do {
    // code to be executed if the condition is true
    } while (condition);
// exceutes what is in the do block
// then it evaluates the while
//if the condition is true it will execute what is in the do block again
//continue this way until the condition in the while becomes false

//__________________________________________________________________________________________________________
//Practise 5.2 do while
// It executes what is within the do block, and then after that it evaluates the while. If
// the condition is true, it will execute what is in the do block again. It will continue to
// do so until the condition in the while changes to false.
//_________________________________________________________________________________________________________
// for loops
// for (initialize variable; condition; statement) {
//     code to be executed
//     }

// There are three parts, separated by semi-colons.
// The first one initializes the variables that can be used in the for loop.
// The second one is a condition: as long as this condition is true, the loop will keep on
// iterating. This condition gets checked after initializing the variables before the first
// iteration (this will only take place when the condition evaluates to true). 
// The last one is a statement. This statement gets executed after every iteration.

// 1. Initialize the variables.
// 2. Check the condition.
// 3. If the condition is true, execute the code block. If the condition is false, the loop will end here.
// 4. Perform the statement (the third part, for example, i++).
// 5. Go back to step 2 check the condition.
let arr = [];
for (let i = 0; i < 100; i++) {
arr.push(i);
}

output:
[
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
    36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
    48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
    72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
    84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
    96, 97, 98, 99
    ]
    //______________________________________________________________________________________________________
    //Practise 5.3
    //______________________________________________________________________________________________________
    //Nested loops  A loop inside a loop is called a nested loop.
//     let arrOfArrays = [];
// for (let i = 0; i < 3; i++){
// arrOfArrays.push([]);
// for (let j = 0; j < 7; j++) {
// arrOfArrays[i].push(j);
// }
// }
//console.log(arrOfArrays);
//output:
// [
//     [
//     0, 1, 2, 3, 4, 5, 6
//     ],
//     [
//     0, 1, 2, 3, 4, 5, 6
//     ],
//     [
//     0, 1, 2, 3, 4, 5, 6
//     ]
//     ]
// console.table(arrOfArrays);
//┌─────────┬───┬───┬───┬───┬───┬───┬───┐
// │ (index) │ 0 │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │
// ├─────────┼───┼───┼───┼───┼───┼───┼───┤
// │ 0 │ 0 │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │
// │ 1 │ 0 │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │
// │ 2 │ 0 │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │
// └─────────┴───┴───┴───┴───┴───┴───┴───┘

//______________________________________________________________________________________________________
// Practice exercise 5.4
// In this exercise we will be generating a table of values. We will be using loops to
// generate rows and also columns, which will be nested within the rows. Nested arrays
// can be used to represent rows in a table. This is a common structure in spreadsheets,
// where each row is a nested array within a table and the contents of these rows are
// the cells in the table. The columns will align as we are creating an equal number of
// cells in each row.
// 1. To create a table generator, first create an empty array, myTable, to hold your
// table data.
// 2. Set variable values for the number of rows and columns. This will allow us
// to dynamically control how many rows and columns we want within the
// table. Separating the values from the main code helps make updates to the
// dimensions easier.
// 3. Set up a counter variable with an initial value of 0. The counter will be used
// to set the content and count the values of the cells within the table.
// 4. Create a for loop with conditions to set the number of iterations, and to
// construct each row of the table. Within it, set up a new temporary array
// (tempTable) to hold each row of data. The columns will be nested within
// the rows, generating each cell needed for the column.
// 5. Nest a second loop within the first to count the columns. Columns are run
// within the row loop so that we have a uniform number of columns within
// the table.

//________________________________________________________________________________________________________-
// Loops nd arrays
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i ++){
    if(names[i].startsWith("M")){
    delete names[i];
    continue;
    }
    names[i] = "hello " + names[i];
    }
    console.log(names);
    //The startsWith() method just checks whether the string starts with a certain character
// output:
//     [
//         'hello Chantal',
//         'hello John',
//         <1 empty item>,
//         'hello Bobbi',
//         'hello Jair'
//         ]
//___________________________________________________________________________________________________________
// Practice exercise 5.5
// Explore how to create a table grid that contains nested arrays as rows within a table.
// The rows will each contain the number of cells needed for the number of columns set
// in the variables. This grid table will dynamically adjust depending on the values for
// the variables.
// 1. Create a grid array variable.
// 2. Set a value of 64 for the number of cells.
// 3. Set a counter to 0.
// 4. Create a global variable to be used for the row array.
// 5. Create a loop that will iterate up to the number of cells you want in the array,
// plus one to include the zero value. In our example, we would use 64+1.
// 6. Add an outer if statement, which uses modulo to check if the main counter
// is divisible by 8 or whatever number of columns you want.
// 7. Inside the preceding if statement, add another if statement to check if the
// row is undefined, indicating whether it is the first run or whether the row
// is complete. If the row has been defined, then add the row to the main grid
// array.
// 8. To finish off the outer if statement, if the counter is divisible by 8, clear the
// row array—it has already been added to the grid by the inner if statement.
// 9. At the end of the for loop, increment of the main counter by 1.
// 10. Set up a temporary variable to hold the value of the counter and push it to
// the row array.
// 11. Within the loop iteration, check if the value of the counter is equal to the total
// number of columns you want; if it is, then add the current row to the grid.
// 12. Please note that the extra cell will not be added to the grid since there aren't
// enough cells to make a new row within the condition that adds the rows to
// the grid. An alternative solution would be to remove the +1 from the loop
// condition and add grid.push(row) after the loop is completed, both of which
// will provide the same solution output.
// 13. Output the grid into the console.
// __________________________________________________________________________________________________________
// for of loop
//use to iterate over the elements of an array
// let arr = [some array];
// for (let variableName of arr) {
// // code to be executed
// // value of variableName gets updated every iteration
// // all values of the array will be variableName once
// }

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
//_________________________________________________________________________________________________________
//Loops and objects
//loop over the properties of an object
//for in loop

//Pracise 5.7
//_________________________________________________________________________________________________________
//For of loop (convert object to array first)  Object.keys(nameOfObject)
// Looping over objects by converting to an
// array
// You can use any loop on objects, as soon as you convert the object to an array. This
// can be done in three ways:
// • Convert the keys of the object to an array
// • Convert the values of the object to an array
// • Convert the key-value entries to an array (containing arrays with two
// elements: object key and object value)


// use the for of loop if we convert it to an
// array first. We do so by using the Object.keys(nameOfObject) built-in function. This
// takes an object and grabs all the properties of this object and converts them to an
// array.

let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
    };

    let arrKeys = Object.keys(car);
    console.log(arrKeys);

//output: [ 'model', 'make', 'year', 'color' ]

    for(let key of Object.keys(car)) {
        console.log(key);
        }

        //output
        // model
        //  make
        //  year
        // color



// we can use the for of loop to loop over the values of the object by
// converting the values to an array. The main difference here is that we use Object.
// values(nameOfObject):

// for(let key of Object.values(car)) {
// console.log(key);
// }

// let arrKeys = Object.keys(car);
// for(let i = 0; i < arrKeys.length; i++) {
// console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
// }

// And this will output:
// model: Golf
// make: Volkswagen
// year: 1999
// color: black

//____________________________________________________________________________________________________________
//break & continue 
//ex 5.8
//when the break statement is executed, the loop will end, even when the condition is still true

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     if (i === 4) {
//     break;
//     }
//     }

//_______________________________________________________________________________________________________
//chapter project
