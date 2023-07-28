/*
Arrays
Arrays are lists of values. The values can be of all data types and one array can
contain different data types. It is useful to store multiple values
inside one variable; for example, a list of students, groceries, or test scores

Creating an array:
arr2 = ["black", "orange", "pink"];

Mixed Arrays
mixed arrays and arrays can hold any type of variable

let arr = ["hi there", 5, true];
console.log(typeof arr[0]);
output: string

console.log(typeof arr[1]);
output: number

console.log(typeof arr[2]);
output: boolean

You can change the values of a constant array, but you cannot change the array itself
Changing the value of a constant array:
const arr = ["hi there"];
arr[0] = "new value";
console.log(arr[0]);
output: new value

arr = ["nope, now you are overwriting the array"];
ouput: TypeError: Assignment to constant variable.
____________________________________________________________________________________________________________

Accessing elements
cars = ["Toyota", "Renault", "Volkswagen"];
console.log(cars[0]);

This log statement will write Toyota to the console because we called for the position
0 of the array, which outputs the first value in the list.
__________________________________________________________________________________________________________
Overwriting elements
cars = ["Toyota", "Renault", "Volkswagen"];
cars[0] = "Tesla";
console.log(cars[0]);
console.log(cars);
output: [ 'Tesla', 'Renault', 'Volkswagen' ]
______________________________________________________________________________________________________________
Built-in length property

colors = ["black", "orange", "pink"]
console.log("Length of colors:", colors.length);
output: Length of colors: 3

booleans = [true, false, false, true];
console.log("Length of booleans:", booleans.length);
output: Length of booleans: 4

emptyArray = [];
console.log("Length of empty array:", emptyArray.length);
output: Length of emptyArray: 0


________________________________________________________________________________________________________________
Adding and replacing elements
We can add elements with the push() method
favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");    
let lengthOfFavoriteFruits = favoriteFruits.push("lime");  // //The value gets added to the end of the array.
console.log(favoriteFruits);
output: [ 'grapefruit', 'orange', 'lemon', 'tangerine', 'lime' ]


splice() method - adding ekemts at a certain index
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);
output: ["circle", "triangle", "square", "trapezoid","rectangle", "pentagon"];

The splice() method takes multiple parameters. The first parameter, 2, is 
the index of the array on which we want to start inserting. The second parameter, 0 is 
the number of elements we want to delete starting at our previously defined starting index.


Another example of splice().
arrOfShapes.splice(2, 2, "square", "trapezoid");
console.log(arrOfShapes);
output: [ 'circle', 'triangle', 'square', 'trapezoid' ]
This replaced the elements rectangle and pentagon and added square and trapezoid in their place.


concat() method adds another array to your current array
The elements of the first array will be first, and the elements of the argument of concat() will be concatenated to the end

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);
output: [ 1, 2, 3, 4, 5, 6 ]


concat()  adding values
adding a single value, or adding comma-separate multiple values:
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);
output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
____________________________________________________________________________________________________________
Deleting

Removing the last element is done with pop():
arr8.pop();
output: [ 1, 2, 3, 4, 5, 6, 7, 8 ]

Deleting the first element can be done with shift()
arr8.shift();
output: [ 2, 3, 4, 5, 6, 7, 8 ]
// all other indices will be reduced by one

Deleting with splice();
arr8.splice(1, 3);
output: [ 2, 6, 7, 8 ]    
// 1 is the index to start from and 3 is the number of elements to delete from teh staring index of 1

Deleting with delete

delete arr8[0];
[ <1 empty item>, 6, 7, 8 ]
// deletes teh index specified and leaves it empty.

______________________________________________________________________________________________________________
Finding Elements
find() method
This function will be executed on every element in the array until it finds
a match, and if it does not, then it will return undefined.

arr8 = [ 2, 6, 7, 8 ];
let findValue = arr8.find(function(e) { return e === 6});
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2);
output: 6, undefined  // there is a match for 6 but none for 10 in this array.

_______________________________________________________________________________________________________________
indexOf() method
returns the index on which the value is found. If a value occurs in an array more than once,
it will return the first occurrence. If the value is not found, it will return -1

arr8 = [ 2, 6, 7, 8 ];
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2);
output: 1, -1    // findIndex returns 1 because 6 is at index 1 and findIndex2 returns -1 because there is no 10


to find the next occurrence of the specified number, you can add a
second argument to indexOf(), specifying from which position it should start
searching
arr8 = [ 2, 6, 7, 8 ];
let findIndex3 = arr8.indexOf(6, 2);
output: -1  //findIndex3 returns -1 because arr8 does not have any further occurence of 6 strarting from index 2



The last occurrence can also be found. This is done with the lastIndexOf() method:
let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
output: 4 // lastDog will contain the value 4 because it is the last element of the array

______________________________________________________________________________________________________________
Sorting
sort();
sorts numbers from small to high and strings A-Z

let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
output: [ 'Alicia', 'Bert', 'Fatiha', 'James', 'Maria' ]

let ages = [18, 72, 33, 56, 40];
ages.sort();
output: [ 18, 33, 40, 56, 72 ]

_____________________________________________________________________________________________________________
Reversing
reverse()
puts the first element last and last element first

let names = [ 'Alicia', 'Bert', 'Fatiha', 'James', 'Maria' ]
names.reverse();
output: [ 'Maria', 'James', 'Fatiha', 'Bert', 'Alicia' ]

_________________________________________________________________________________________________________________
Practical Excercise 3.1


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
________________________________________________________________________________________________________________

Multidimensional arrays
arrays containign arrays

let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrOfArrays = [someValues1, someValues2, someValues3];


Two dimensional arrays
an array of already existing arrays is called a two-dimensional array

let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

to access elements of the inner arrays, you will have to specify an index twice
let value1 = arrOfArrays[0][1];
output: 2   // [0] is the index of first array we look at then [1] is the element 2 stored at index 1.

let value2 = arrOfArrays[2][2];
output: 9  // [2] is the index of the third array and [2] is the element 9 stored at index 2 on the third array 

________________________________________________________________________________________________________________
Practise 3.3

1. Create an array containing three values: 1, 2, and 3.
2. Nest the original array into a new array three times.
3. Output the value 2 from one of the arrays into the console.


let array1 = [1,2,3];
let array2 = [array1, array1, array1];
let value2 = array2 [0][1];
console.log(value2);

________________________________________________________________________________________________________________
Objects
have properties and can  perform actions. An object is a chance to
group multiple variables into one. This is done with curly brackets: { and }

let dog = { dogName: "JavaScript",
weight: 2.4,
color: "brown",
breed: "chihuahua",
age: 3,
burglarBiter: true
};

To access a property of an object 
let dogColor1 = dog["color"];
OR
let dogColor2 = dog.color;
output: brown
_______________________________________________________________________________________________________________
Updating Objects


dog["color"] = "blue";
dog.weight = 2.3;
console.log(dog);
output: {
            dogName: 'JavaScript',
            weight: 2.3,
            color: 'blue',
            breed: 'chihuahua',
            age: 3,
            burglarBiter: true
        }
______________________________________________________________________________________
changing the data type
dog["age"] = "three"; // or dog.age ="three";
let variable = "age";
console.log(dog[variable]);
output: three
// we changed the value of age to three
________________________________________________________________________________________________________________
Practice exercise 3.4

1. Create a new myCar object for a car. Add some properties, including, but not
limited to, make and model, and values for a typical car or your car. Feel free
to use booleans, strings, or numbers.
2. Create a variable that can hold the string value color. This variable
containing a string value color can now be used to reference the property
name within myCar. Then, use the variable within the square bracket notation
to assign a new value to the color property in myCar.
3. Use that same variable and assign a new property string value to it, such as
forSale. Use the bracket notation once again to assign a new value to the
forSale property to indicate whether the car is available for purchase.
4. Output make and model into the console.
5. Output the value of forSale into the console.

//1
let myCar = {make:"Toyota",
            model:"Yaris",
            year:"2023",
            forSale: "true",
            color:"black"
            
}

//2
let newColor = "color";
myCar[newColor] = "white";
console.log(myCar);
//3
newColor = "forSale";
myCar[newColor]= false;
//4
console.log(myCar.make, myCar.model);
//5
console.log(myCar.forSale);

______________________________________________________________________________________________________________
Objects in Objects

address is an object inside the object company:

let company = { companyName: "Healthy Candy",
activity: "food manufacturing",
address: {
street: "2nd street",
number: "123",
zipcode: "33116",
city: "Miami",
state: "Florida"
},
yearOfEstablishment: 2021
};

to access or modify a property of an object we can use:

company.address.zipcode = "33117";
OR
company["address"]["number"] = "100";

______________________________________________________________________________________________________________
Arrays in Objects

company = { companyName: "Healthy Candy",
activities: ["food manufacturing",
"improving kids' health", "manufacturing toys"],
address: {
street: "2nd street",
number: "123",
zipcode: "33116",
city: "Miami",
state: "Florida"
},
yearOfEstablishment: 2021
};

** to fetch a value from the array
let activity = company.activities[1];
output: improving kids' health  // this is at index 1 in the array activities in the object company.
______________________________________________________________________________________________________________
Objects in Arrays


let addresses = [{
street: "2nd street",
number: "123",
zipcode: "33116",
city: "Miami",
state: "Florida"
},
{
street: "1st West avenue",
number: "5",
zipcode: "75001",
city: "Addison",
state: "Texas"
}];

let streetName = addresses[0].street;       //fetching the street variable in object at index 0 of the array
output: 2nd street
______________________________________________________________________________________________________________
Objects in arrays in objects

company = { companyName: "Healthy Candy",
activities: [ "food manufacturing",
"improving kids' health",
[ 67 ]
"manufacturing toys"],
address: [{
street: "2nd street",
number: "123",
zipcode: "33116",
city: "Miami",
state: "Florida"
},
{
street: "1st West avenue",
number: "5",
zipcode: "75001",
city: "Addison",
state: "Texas"
}],
yearOfEstablishment: 2021
};

let streetName = company.address[0].street;
output: 2nd street

_______________________________________________________________________________________________________________
Practice exercise 3.5
1. Create an object named people that contains an empty array that is called
friends.
2. Create three variables, each containing an object, that contain one of your
friend's first names, last names, and an ID value.
3. Add the three friends to the friend array.
4. Output it to the console.

//1
let people = {friends: []

};

//2
let friend1 = {firstname: "Jack", lastname:"Black", ID: 100
}
let friend2 = {firstname: "Jill", lastname:"White", ID: 101
}
let friend3 = {firstname: "Jane", lastname:"River", ID: 102
}
//3
people.favoriteFruits = [];
people.favoriteFruits.push(friend1, friend2, friend3);
//4
console.log(people);

_______________________________________________________________________________________________________________
Projects..

Manipulating an array
Take the following array:
const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
Manipulate your array using various methods, such as pop(), push(), shift(), and
unshift(), and transform it into the following:
["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
You can take the following steps, or adopt your own approach:
• Remove the first item and the last item.
• Add FIRST to the start of the array.
• Assign hello World to the fourth item value.
• Assign MIDDLE to the third index value.
• Add LAST to the last position in the array.
• Output it to the console.



const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];


//["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

theList.pop(); 
theList.shift(); 
theList.unshift("FIRST"); 
theList[3] = "hello World"; 
theList[2] = "MIDDLE";
theList.splice(4.3); 
theList.push("LAST"); 
console.log(theList);


 _________________________________________________________________________________________________________________
 Project 2 Chapter 3...

Company product catalog
In this project, you will implement a data structure for a product catalog and create
queries to retrieve data.
1. Create an array to hold an inventory of store items.
2. Create three items, each having the properties of name, model, cost, and
quantity.
3. Add all three objects to the main array using an array method, and then log
the inventory array to the console.
4. Access the quantity element of your third item, and log it to the console.
Experiment by adding and accessing more elements within your data
structure.

//1
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
 _________________________________________________________________________________________________________________
 Self help Quiz

1. Can you use const and update values within an array?
Ans: yes

2. Which property in an array gives the number of items contained in the array?
Ans: length

3. What is the output in the console?
const myArr1 = [1,3,5,6,8,9,15];
console.log(myArr1.indexOf(0));
console.log(myArr1.indexOf(3));
Ans: -1, 1

4. How do you replace the second element in an array myArr =
[1,3,5,6,8,9,15] with the value 4?
Ans:        const myArr = [1,3,5,6,8,9,15];
            myArr.splice(1,1,4);
            console.log(myArr);

5. What is the output in the console?
const myArr2 = [];
myArr2[10] = 'test'
console.log(myArr2);
console.log(myArr2[2]);
Ans:[empty × 10, "test"]  undefined
   
6. What is the output in the console?
const myArr3 = [3,6,8,9,3,55,553,434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]);
Ans: undefined
*/