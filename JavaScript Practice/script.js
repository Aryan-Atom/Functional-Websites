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

  // Properties
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
  // Constructor inside class
  constructor(name, age) {
    this.name = name;
    this.age = age;

    // Method inside constructor (not recommended in real apps, 
    // better to define outside, but works for learning)
    this.printStudent = function () {
      console.log("Student name : " + name + " | Age : " + age);
    };
  }
}

// Creating object using class
const s1 = new Student("Atom", 23);
s1.printStudent();



/***********************
 * 3. Call, Apply, Bind
 * Ways to explicitly set "this"
 ***********************/

const obj = { name: "Atom", age: "23" };

/*** #1 Call ***/
// Immediately calls function with given "this"
function abcd() {
  console.log(this.name);
}
// abcd.call(obj); // Output: "Atom"


/*** #2 Apply ***/
// Similar to call, but takes arguments as array
function xyz(a, b, c) {
  console.log(this, "Params in Array After this :", a, b, c);
}
// xyz.apply(obj, [1, 2, 3]); 
// Output: { name: 'Atom', age: '23' } Params in Array After this : 1 2 3


/*** #3 Bind ***/
// Does NOT call immediately. Returns a new function with bound "this".
function bindFunc() {
  console.log(this.name);
}

const bindFnCall = bindFunc.bind(obj);
bindFnCall(); // Output: "Atom"
