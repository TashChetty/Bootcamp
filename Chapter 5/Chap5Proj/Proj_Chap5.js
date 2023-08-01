// Math multiplication table
// In this project, you will create a math multiplication table using loops. You can do
// this using your own creativity or by following some of the following suggested steps:
// 1. Set up a blank array to contain the final multiplication table.
// 2. Set a value variable to specify how many values you want to multiply with
// one another and show the results for.
// 3. Create an outer for loop to iterate through each row and a temp array to store
// the row values. Each row will be an array of cells that will be nested into the
// final table.
// 4. Add an inner for loop for the column values, which will push the multiplied
// row and column values to the temp array.
// 5. Add the temporary row data that contains the calculated solutions to the
// main array of the final table. The final result will add a row of values for the
// calculations.

let table = [];         //empty array
let value = 4;          //variable to show values you want to multiply with one another and show the results for.
for(let x=0; x<value; x++){     //outer loop to iterate through each row

    let temp = [];              // temp array to store row values
    for(let y = 0; y<value; y++){   //inner loop for column values
        temp.push(x*y);             //push the multiplied row and column values to the temp array
    }
    table.push(temp);           //Adding temp row data that contains calculated solutions to main array of the final table
}
 
console.table(table); 
