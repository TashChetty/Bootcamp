// Chapter projects
// Employee tracking app
// Create a class to track the employees of a company:
// 1. Use first names, last names, and the number of years worked as values in the
// constructor.
// 2. Create two or more people with values for their first names, last names, and
// the number of years they've worked at the company. Add the people into an
// array.
// 3. Set up a prototype to return the details of the person's first and last names
// and how long they've worked at the company.
// 4. Iterate the contents of the array to output the results into the console, adding
// some text to make the output a full sentence.

class Employee {
    constructor(firstname, lastname, tenure){
        this.firstname = firstname;
        this.lastname = lastname;
        this.tenure = tenure;
    }
}
    let emp1 = new Employee("Allison", "Green", "5 years");
    let emp2 = new Employee("Jack", "Black", "12 years");
    let employees = [emp1,emp2];
    

    Employee.prototype.empDetails = function(){
        return this.firstname+ " " + this.lastname + " has a tenure of " + this.tenure;
    }
    
    employees.forEach((emp) => {
        console.log(emp.empDetails());
    });
    

   //____________________________________________________________________________________________________

//    //Project 2
//    Menu items price calculator
// Create a class which will allow you to work out the combined price of a number of
// items, and interact with it to work out the total cost of different orders.
// 1. Create a class that contains the prices of two menu items as private field
// declarations.
// 2. Use the constructor in the class to get the argument values (how many of
// each item are being bought).
// 3. Create a method to calculate and return the total cost depending on how
// many of each item the user selects.
// 4. Use a getter property to grab the value output by the calculation method.
// 5. Create two or three objects with different combinations of menu selections,
// and output the total cost in the console.

class Menu{
    #item1 = 12;
    #item2 = 7;
    constructor(cakePrice, saladPrice){
        this.cakePrice = cakePrice;
        this.saladPrice = saladPrice;
    }
    calcTotal(){
        return (this.cakePrice * this.#item1) + (this.saladPrice * this.#item2);
        
        }
        get total(){
            return this.calcTotal();
        }
    }
const cakePrice = new Menu(1,0);
const saladPrice = new Menu(1,1);

console.log(cakePrice.total);
console.log(saladPrice.total);

