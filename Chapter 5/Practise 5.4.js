//Practice exercise 5.4
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

let myTable = [];                   // empty array
let rows = 3;                       // no of rows to construct
let columns = 4;                    // no of columns to construct
let counter = 0;                    // counter to count values of cells within the table 
for (let i = 0; i < rows; i++){        // for loop with variable, condition and statement
    let tempTable = [];                 // temp array to hold each row of data
    for (let j = 0; j < columns; j++){  //nested for loop to count the columns
        counter++;                      // incrementing the main counter
        tempTable.push(counter);    // pushing counter values to temp array
    }
    myTable.push(tempTable);        //push the temp array to the main table
}
console.table(myTable);             // output the table 
