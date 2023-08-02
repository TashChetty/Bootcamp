// Practice exercise 7.2
// Get your friend's full name:
// 1. Using the Person class from Practice exercise 7.1, add a method called
// fullname, which returns the concatenated value of firstname and lastname
// when invoked.
// 2. Create values for person1 and person2 using two friends' first and last names.
// 3. Using the fullname method within the class, return the full name of one or
// both people.

class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    fullname(firstname , lastname ){
        return(firstname + lastname);
    }
}
let p = new Person("Chuck", "Bass");
var fullname = p.fullname("Chuck ", "Bass");
console.log(fullname);

let person1 = new Person("Nate", "Archibald");
let person2 = new Person("Dan", "Humphrey");

var fullname =person1.fullname("Nate ", "Archibald");
console.log(fullname);

var fullname =person1.fullname("Dan ", "Humphrey");
console.log(fullname);
