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

// const ans = timer(); // Starts timer automatically



/***********************
 * 6. Event Delegation
 * Handling events on parent element instead of each child
 ***********************/

let parent = document.querySelector("#parent");
parent.addEventListener("click", function (details) {
  if (details.target.id === "play") {
    console.log("Play Clicked");
  } else if (details.target.id === "pause") {
    console.log("Pause Clicked");
  }
});

/* 
Explanation:
- Instead of adding click listeners to every child button (#play, #pause), 
  we listen on the parent element (#parent).
- Use `details.target` to detect which child was clicked.
- Saves memory and is scalable for dynamic child elements.
*/



/***********************
 * 7. Callback vs Promise vs Async/Await
 ***********************/

const axios = window.axios;

/* ---- CALLBACK STYLE ---- */

function getDataWithCallback(callback) {
  axios.get("...")
    .then(response => {
      callback(null, response.data);
    })
    .catch(error => {
      callback(error, null);
    });
}


getDataWithCallback(function (err, data) {
  if (err) {
    console.error("Error (Callback):", err);
  } else {
    console.log("Data (Callback):", data);
  }
});


/* ---- PROMISE STYLE ---- */

function getDataWithPromise() {
  return new Promise((resolve, reject) => {
    axios.get("...")
      .then(response => {
        resolve(response.data); 
      })
      .catch(error => {
        reject(error);
      });
  });
}


getDataWithPromise()
  .then(data => console.log("Data (Promise with resolve/reject):", data))
  .catch(err => console.error("Error (Promise with resolve/reject):", err));

/* ---- ASYNC/AWAIT STYLE ---- */

async function getDataAsync() {
  try {
    const res = await axios.get("...");
    console.log("Data (Async/Await):", res.data);
  } catch (err) {
    console.error("Error (Async/Await):", err);
  }
}


getDataAsync();


/* NOTES:
1. Callback: good for simple async tasks, but can get messy with multiple nested async calls.
2. Promise: cleaner syntax, allows chaining (.then, .catch).
3. Async/Await: syntactic sugar over promises; best readability and error handling with try...catch.
*/


/* DOM Manupulation */

// Selection (Targetting the HTML Tag)

// 1. Select ALL matching elements (static NodeList)
document.querySelectorAll("selector");
// Example: document.querySelectorAll(".btn");

// 2. Select the FIRST matching element
document.querySelector("selector");
// Example: document.querySelector("#main h1");

// 3. Select element by ID (only one, since IDs are unique)
document.getElementById("id");
// Example: document.getElementById("header");

// 4. Select ALL elements with the same class name (live HTMLCollection)
document.getElementsByClassName("className");
// Example: document.getElementsByClassName("item");

// 5. Select ALL elements with the same tag name (live HTMLCollection)
document.getElementsByTagName("tagName");
// Example: document.getElementsByTagName("div");




// Methods of Manipulating Data
// 1. Change inner HTML content
element.innerHTML = "New Content";
// Example: document.querySelector("#header").innerHTML = "<h1>Welcome</h1>"; 
// 2. Change text content (no HTML parsing)
element.textContent = "New Text"; 
// Example: document.querySelector("#header").textContent = "Welcome";

// 3. Change CSS styles
element.style.property = "value"; 
// Example: document.querySelector("#header").style.color = "blue"; 

// 4. Add or remove CSS classes
element.classList.add("newClass"); 
element.classList.remove("oldClass"); 
// Example: document.querySelector("#header").classList.add("highlight");

// 5. Set or get attributes
element.setAttribute("attr", "value"); 
let attrValue = element.getAttribute("attr"); 
// Example: document.querySelector("#link").setAttribute("href", "https://example.com");  
// Example: let href = document.querySelector("#link").getAttribute("href");

// 6. Create new elements
let newElem = document.createElement("div"); 
// Example: let newDiv = document.createElement("div"); 
newElem.textContent = "Hello World";
document.body.appendChild(newElem);
// Example: document.body.appendChild(newDiv);

// 7. Remove elements
element.remove(); 
// Example: document.querySelector("#oldElement").remove(); 

// 8. Event Listeners
element.addEventListener("event", function() { 
  // event handler code 
});
// Example: document.querySelector("#btn").addEventListener("click", function() { alert("Clicked!"); });

// 9. Traversing the DOM
let parentElem = element.parentNode; 
let children = element.childNodes; 
let nextSibling = element.nextSibling; 
let previousSibling = element.previousSibling; 
// Example: let parentDiv = document.querySelector("#child").parentNode;  

// 10. Form Manipulation
let formValue = document.querySelector("#myForm input").value; 
document.querySelector("#myForm input").value = "New Value"; 
// Example: let username = document.querySelector("#loginForm input[name='username']").value;

// 11. Local Storage
localStorage.setItem("key", "value"); 
let storedValue = localStorage.getItem("key"); 
localStorage.removeItem("key"); 
// Example: localStorage.setItem("theme", "dark");  
// Example: let theme = localStorage.getItem("theme");

// 12. Session Storage
sessionStorage.setItem("key", "value"); 
let sessionValue = sessionStorage.getItem("key"); 
sessionStorage.removeItem("key"); 
// Example: sessionStorage.setItem("sessionID", "12345");  
// Example: let sessionID = sessionStorage.getItem("sessionID");  

// 13. JSON Manipulation
let jsonString = JSON.stringify({ name: "Atom", age: 23 }); 
let jsonObj = JSON.parse(jsonString); 
// Example: let userJson = JSON.stringify({ username: "atom", loggedIn: true });  
// Example: let userObj = JSON.parse(userJson); 

// 14. Cookies
document.cookie = "username=Atom; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/"; 
let cookies = document.cookie; 
// Example: document.cookie = "sessionToken=abc123; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";  
// Example: let allCookies = document.cookie; 


// 15. Window Manipulation 
window.open("https://example.com", "_blank");
window.close();
window.scrollTo(0, 100); // Scroll to 100px from top
// Example: window.open("https://example.com", "_blank");  
// Example: window.scrollTo(0, 500); // Scroll to 500px from top
// Example: window.close(); // Close current window (if opened via script)







