// Practice exercise 5.7
// In this exercise, we will experiment with looping over objects and internal arrays.
// 1. Create a simple object with three items in it.
// 2. Using the for in loop, get the properties' names and values from the object
// and output them into the console.
// 3. Create an array containing the same three items. Using either the for loop or
// the for in loop, output the values from the array into the console.

let dog = {                         //object with 3 items
    breed: "German Shephard",
    color: "Tan",
    sound: "Bark"
    
}
for(let prop in dog){               //used for loop to get properties names and values from object
    console.log(prop,dog[prop]);     // outputing to conole.
}

let animal = ["breed","color", "sound"];    //created array with the 3 same items

for (let i = 0; i < animal.length; i++) {   // for loop to output values from array
    console.log(i, animal[i]);
}
 
for (pet in animal) {
    console.log(pet, animal[pet]);
} 

