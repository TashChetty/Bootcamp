/*
1. Create an empty array to use as a shopping list.
2. Add Milk, Bread, and Apples to your list.
3. Update "Bread" with Bananas and Eggs.
4. Remove the last item from the array and output it into the console.
5. Sort the list alphabetically.
6. Find and output the index value of Milk.
7. After Bananas, add Carrots and Lettuce.
8. Create a new list containing Juice and Pop.
9. Combine both lists, adding the new list twice to the end of the first list.
10. Get the last index value of Pop and output it to the console.
11. Your final list should look like this:
["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice",
"Pop", "Juice", "Pop"]
*/

//1
let shoplist = [];
//2
shoplist.push("milk", "bread", "apples");
//3
shoplist.splice(1,1, "bananas", "eggs");
//4
shoplist.pop();
console.log(shoplist);
//5
shoplist.sort();
//6
let findIndex = shoplist.indexOf("milk");
console.log(findIndex);
//7
shoplist.splice(1,0,"carrots", "lettuce")
//8
let newlist =["juice", "pop"];
console.log(newlist);
//9
let combinedList = shoplist.concat(newlist, newlist);
console.log(combinedList);
//10
let indexofPop = combinedList.lastIndexOf("pop");
console.log(indexofPop);
//11
console.log(combinedList);

