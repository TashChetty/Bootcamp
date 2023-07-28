/*
Practice exercise 3.5
1. Create an object named people that contains an empty array that is called
friends.
2. Create three variables, each containing an object, that contain one of your
friend's first names, last names, and an ID value.
3. Add the three friends to the friend array.
4. Output it to the console.
*/

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
people.friends = [];
people.friends.push(friend1, friend2, friend3);
//4
console.log(people);