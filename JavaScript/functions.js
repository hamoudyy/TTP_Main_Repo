// JS - Intermediate

let methods = Object.getOwnPropertyNames(Number.prototype);
console.log(methods);

// The way Object.getOwnPropertyNames work is grabbing 




/*

'toFixed',
'toPrecision',
'toString',


*/


// toFixed() - format a number with a fixed number of decimal places.
let num = 1234.8947;
console.log(num.toFixed(2)) // 1234.89 expected output.

// toPrecision() -  format a number to a specified length.
let myNum = 1468.5678;
console.log(myNum.toPrecision(4)) // 1469 expected output.




// 2d Arrays
let myArray = [
    [1,2,3], 
    [4,5,6],
    [7,8,9]
]
console.log("myArray[0][2])", myArray[0][2]), //3
console.log("myArray[2][1]", myArray[2][1]) //8 row first, column second. starts from 0 > 1 > 2

// 2d Arrays (nested)
let myArray2 = [
    
    ["a", "b","c"],
    [4,5,6],
    [7,8,9]

]
console.log("myArray2[0][0][0]", myArray2[0][0][0]) // a

// Objects = objects are a collection of key-value pairs, where each key is a unique identifier and each value can be of any data type, including other objects

let person = new Object(); //empty object
person.name = "John";
person.age = 23;
person.city = "NY";
console.log("person",person)

console.log("person.age", person.age); //23

let person2 = {
    name: "Mary",
    age: 21,
    city: "CA"
}

console.log("person2.name", person2.name);
person2.sport = "soccer";
console.log("person2", person2);
console.log("person2", person2.sport);

delete person2.sport;
console.log("person2", person2);

let person3 = {
    name: "Bob",
    age: 26,
    city: "NJ"

}

for (let a in person3){
    console.log("property", a); //name // age // city
    console.log("person3[property]", person3[a])
}

for (let [key, value] of Object.entries(person3)) {
    console.log("key", key);
    console.log("value", value);
}


let keys = Object.keys(person3);
console.log("all keys", keys);

let values = Object.values(person3);
console.log("all values", values);

let student = {
    name: "Johne Joe",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "NEW YORK",
        country: "USA"
    }
}

console.log("student.address.city", student.address.city);


let company = {
    name: "ABC Corp",
    location: "NY",
    departments: {
        sales: {
            manager: "John Smith",
            employees: {
                employee: {
                    name: "Alice"
                }
            }
        }
    }
}


console.log("company.departments.sales.employees.employee.name",company.departments.sales.employees.employee.name);




let person4 = {
    name: "John",
    age: 30,
    sayHello: function(name) {
        console.log(`Hello my name is ${name}`);

    }
}

person4.sayHello("John Doe");


let calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a-b;
    }
}
console.log("calculator.add(5,3)",calculator.add(5,3)) // 8
console.log("calculator.subtract(10,5)",calculator.subtract(10,5)) // 5

let car = {
    brand: "Tesla",
    model: "Model 3",
    startEnginer: function() {
        console.log("Starting the " + this.brand + " " + this.model + "engine"); // "this" specifies to use brand and model in this code block.
    }
}

car.startEnginer();

let car2 = {
    brand: "Toyota",
    model: "Camry", 
    year: 2022,
    displayDetails() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}

car2.displayDetails();

let car3 = {
    brand: "Tesla",
    displayInfo: function() {
        console.log(`Brand: ${this.brand}`);

    },

    engine: {
        type: "Electric",
        start: function() {
            console.log(`Type: ${this.type}`);
            
        }
    }

}

car3.displayInfo();
car3.engine.start();


//Object Constructors

function Person(name,age,city){
    this.name = name;
    this.age = age;
    this.city = city;

}

let person01 = new Person("John", 30, "NY")
let person02 = new Person("Mary", 34, "NJ")
console.log("person01",person01);
console.log("person02",person02);
console.log("person01.name",person01.name);





function Book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getInfo = function() {
        return `${this.title} by ${this.author}, ${this.year}`;
    }
}


let book1 = new Book("The Great Gatsby", "F. Scott", 1925);
let book2 = new Book("To kill a mockingbird", "Harper L", 1960);

console.log("book1", book1);
console.log("book2", book2);
console.log("book1.getInfo()", book1.getInfo());
console.log("book2.getInfo()", book2.getInfo());

function Book2(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getInfo = function() {
        return `${this.title} by ${this.author}, ${this.year}`;
    }
}


Book2.prototype.getAge = function() {
    const currentYear = new Date().getFullYear(); // this will output 2023
    const age = currentYear - this.year;
    return age;

}

let book4 = new Book2("Spiderman", "IDK", 1990);
console.log("book4.getAge()", book4.getAge()); 

const person20 = {
    name: "John",
    age: 30,

}

console.log(person20.hasOwnProperty("name")); //True , since name exists.
console.log(person20.hasOwnProperty("car")); // Fasle , bc we dont have a car that exists.

const person10 = {
    greet() {
        console.log("Hello!");
    }
}

const john = Object.create(person10);
person10.greet();
john.greet();




const vehicle3 = {
    type: "car",
    startEngine() {
        console.log("Engine started");
    }
}

const tesla3 = Object.create(vehicle3);

console.log(vehicle3.hasOwnProperty("type")); // Will return true since it has a key type "car".
tesla3.model = "model 3";
console.log(tesla3.hasOwnProperty("model")); // true
console.log(tesla3.hasOwnProperty("type")); // false 
// even though we inherited all properties from vehicle (for tesla3) - the hasOwnProperty() checks if the type property is from the 'original parent' object.


// Object Practice 

function createMovie(id, name, director, year){

    // by passing createMovie as the argument {parameter} to Object.create(), the newly created objected (in this case movie) will have its prototype set to createMovie

    let movie = Object.create(createMovie); // prototypal inheritance
    movie.id = id;
    movie.name = name;
    movie.director = director;
    movie.year = year;

    return movie
}

createMovie.getInfo = function(){
    return `${this.director}, ${this.year}`
}

let movieCreate = new createMovie(1,"Spiderman","IDK", 2023);
console.log("movieCreate.getInfo()", movieCreate);





/// Primitive Types -- Store single values such as numbers, strings booleans. They are immutable.

// Primitive Types - Numbers

let name1 = "Alice"; //Alice
let name2 = name1; // Alice

name2 = "Bob" // name2 = Bob

console.log("name1", name1); // Alice
console.log("name2", name2); // Bob

// Primitive Types - Booleans

let bool1 = true; 
let bool2 = bool1; // true 

bool2 = false; // false
console.log("bool1", bool1); // true
console.log("bool2", bool2); // false

 // Complex Types - objects

let person11 = {
    name: "Alice",
    age: 30
}

let person12 = person11;
person12.name = "Bob";

console.log(person11.name); // Bob
console.log(person12.name); // Bob


// Complex Types - Arrays
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4); // [1,2,3,4]

console.log("arr1",arr1) // 1,2,3,4
console.log("arr2",arr2) // 1,2,3,4



// Pass By Value (integer - primitive type)
function changeValue(x){
    x = 5;
    console.log("Inside the function: ", x); // 5
}

let num3 = 10;
console.log("Before the function call: ", num3) // 10

changeValue(num3);
console.log("Num3 after function call (changeValue): ", num3);


// Pass By Value (string -- primitive type)

function changeString(str){
    str = "Hello World";

}

let message = "Goodbye";
changeString(message);
console.log("message: ",message)


// Pass By Reference  can only be done with the following :;

// Pass By Reference array (complex type)
function updateArray(arr) {
    // arr = [1,2,3] 
    arr.push(4)
    console.log("arr inside of functions: ", arr)

}

let numbers = [1,2,3];
updateArray(numbers)
console.log("Numbers", numbers); // [1,2,3,4]



/// Pass By Reference - objects (complex type)

function updateBookTitle(book) {
    book.info.title = "New Book";
    console.log("book: ", book)

}

let myBook = {
    info: {
        title: "Old Book",
        pages: 200
    }
}

updateBookTitle(myBook)
console.log("myBook.info.title",myBook.info.title) // New Book

// Callback Functions - a function that is passed as an argument to another function and is invoked (called) at a specific point within the function

function greet(name, callback){
    console.log("Hello, " + name + "!"); // Hello John
    callback(); // "Goodbye"
}

function sayGoodBye() {
    console.log("Goodbye!");
}

greet("John", sayGoodBye);

// Callback function example

function calculate(num1,num2,operation, call){
    let result;
    if (operation === "add") {
        result = num1 + num2;
    } 
    else if (operation === "subtract"){
        result = num1 - num2;
    }
    call(result);
}
function handleResult(result) {
    console.log("Results: ", result);
}

calculate(5,3,"add", handleResult); 

// Result: 8

calculate(10,5,"subtract", handleResult);

// Result: 5

// High Order Functions - functions that can accept other functions as arguments and/or return functions as results. In other words, it treats functions as values

// forEach() - High order function (Bult - javascript)

let numbers4 = [1,2,3,4,,5];

numbers4.forEach(function(num) {         // doesnt have to be num, can be any variable
    console.log(num * 2); //2 //4 // 6
})


// Map = Higher Order Function (built in method)

let numbers10 = [1,2,3,4,5];
let double2 = numbers10.map(function(n) {
    return n * 2;
})

console.log(double2) 





// Filter Higher Order Function (built in)

let num11 = [1,2,3,4,5];
let evenNumbers = num11.filter(function(num) {
    return num % 2 === 0
});

// First loop
// num = 1
// return 1 % 2 === 0
// evenNumbers []

// Second loop
// num 2
// return 2 % 2 === 0


console.log("evenNumbers", evenNumbers); // [2,4]


// Reduce - Higher Order function (built in)

let numbers12 = [1,2,3,4,5]
let sum = numbers12.reduce(function(accumulator, num) {
    // first loop
    // accumulator = 0
    // 1 = 0 + 1
    

    // second loop
    // accumulator = 1 
    // 3 = 1 + 2
    

    // third loop
    // accumulator = 3
    // 6 = 3 + 3

    // fourth loop
    // accumulator = 10

    // fifth loop
    // accumulator = 15
    
    accumulator += num;
    return accumulator
}, 0)

console.log("sum", sum)
// 15


