// Practice exercise 7.1
// Take the following steps to create a person class, and print instances of friends'
// names:
// 1. Create a class for Person including the constructor for firstname and
// lastname.
// 2. Create a variable and assign a value of the new Person object using your
// friend's first and last names.
// 3. Now add a second variable with another friend's name using their first name
// and last name.
// 4. Output both friends into the console with a greeting of hello.

class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
let p = new Person("Nadine", "Naidoo");
let p2 = new Person("Yegalay", "Moodley");

console.log("Hello "+ p.firstname, p.lastname + " and "+ p2.firstname, p2.lastname);
