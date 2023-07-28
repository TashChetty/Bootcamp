// /*
// Manipulating an array
// Take the following array:
// const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
// {test: 'one', score: 55}, ['one', 'two']];
// Manipulate your array using various methods, such as pop(), push(), shift(), and
// unshift(), and transform it into the following:
// ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
// You can take the following steps, or adopt your own approach:
// • Remove the first item and the last item.
// • Add FIRST to the start of the array.
// • Assign hello World to the fourth item value.
// • Assign MIDDLE to the third index value.
// • Add LAST to the last position in the array.
// • Output it to the console.

// */ 


//__________________________________________________________________________________________

// /*
// Company product catalog
// In this project, you will implement a data structure for a product catalog and create
// queries to retrieve data.
// 1. Create an array to hold an inventory of store items.
// 2. Create three items, each having the properties of name, model, cost, and
// quantity.
// 3. Add all three objects to the main array using an array method, and then log
// the inventory array to the console.
// 4. Access the quantity element of your third item, and log it to the console.
// Experiment by adding and accessing more elements within your data
// structure.
// */
// //1
let storeItems = [];
//2
let item1 = {name: "bag", model: "BG 100", cost: 4000, quantity: "5"};
let item2 = {name: "shoes", model: "SH 270", cost: 900, quantity: "20"};
let item3 = {name: "belt", model: "BL 909", cost: 150, quantity: "17"};
//3

storeItems.push(item1, item2, item3);
console.log(storeItems);
//4
console.log(storeItems[2].quantity);



