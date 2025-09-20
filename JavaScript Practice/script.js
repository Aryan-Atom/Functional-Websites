/***********************
 * 1. Constructor Function (Book)
 ***********************/

// Constructor function for Book
function Book(name, author, date, code) {
  // Check if called with 'new' keyword
  if (!new.target) {
    console.error(
      "New keyword not used. Accessing as function, not as a constructor"
    );
  }

  // Properties (use =, not :)
  this.name = name;
  this.author = author;
  this.date = date;
  this.code = code;

  // Method inside constructor
  this.bookDescription = function () {
    console.log(
      "The book Title is : " +
        name +
        " | The author is : " +
        author +
        " | The publish date is : " +
        date +
        " | The code is : " +
        code
    );
  };
}

// Creating object using constructor function
const book1 = new Book("Abc", "Xyz", "12/01/2025", "#CODR");
// book1.bookDescription();   // Uncomment to see output



/***********************
 * 2. Class Example (Student)
 ***********************/

// Class declaration
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    // Method inside constructor
    // (better practice: define methods outside constructor)
    this.printStudent = function () {
      console.log("Student name : " + name + " | Age : " + age);
    };
  }
}

// Creating object using class
const s1 = new Student("Atom", 23);
s1.printStudent();



/***********************
 * 3. Prototypal Inheritance
 ***********************/

// Constructor function for Human
function MakeHuman(name, age) {
  this.name = name;
  this.age = age;
}

// Adding shared method using prototype
MakeHuman.prototype.printName = function () {
  console.log(this.name);
};

// Create instance
const human = new MakeHuman("Atom", 23);
human.printName(); // Output: "Atom"



/***********************
 * 4. Call, Apply, Bind
 * Ways to explicitly set "this"
 ***********************/

const obj = { name: "Atom", age: "23" };

/*** #1 Call ***/
// Immediately invokes function with "this" set to obj
function abcd() {
  console.log(this.name);
}
// abcd.call(obj); // Output: "Atom"

/*** #2 Apply ***/
// Like call, but arguments passed as an array
function xyz(a, b, c) {
  console.log(this, "Params in Array After this :", a, b, c);
}
// xyz.apply(obj, [1, 2, 3]);

/*** #3 Bind ***/
// Returns a new function with bound "this" (does not call immediately)
function bindFunc() {
  console.log(this.name);
}
const bindFnCall = bindFunc.bind(obj);
bindFnCall(); // Output: "Atom"



/***********************
 * 5. Closures
 * Functions that “remember” variables from parent scope
 ***********************/

// Example 1: Counter closure
function countParent() {
  let count = 0; // private variable
  return function counter() {
    count++;
    console.log(count);
  };
}

const val = countParent();
val(); // 1
val(); // 2

// Example 2: Timer closure
function timer() {
  var a = 12; // variable remembered by inner function
  return setInterval(function () {
    console.log(a);
  }, 2000);
}

const ans = timer();
// ans(); // Already running, prints 12 every 2 seconds
