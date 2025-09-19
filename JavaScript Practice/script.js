function Book(name, author, date, code) {
  if (!new.target) {
    // accessing the new property being used or not
    console.error(
      "New keyword not used. Accessing as function, not as a constructor"
    );
  }
  this.name = name;
  this.author = author;
  this.date = date;
  this.code = code;

  this.bookDescription = function () {
    console.log(
      "The book Title is : " +
        name +
        "The author is : " +
        author +
        "The publish date is" +
        date +
        "the code is : " +
        code
    );
  };
}

const book1 = new Book("Abc", "Xyz", "12/01/2025", "#CODR");

// console.log(book1.bookDescription())

class Student {   //constructor implementation using class
  constructor(name, age) {
    this.name = name;
    this.age = age;

    this.printStudent = function () {
      console.log("student age : ", age, "name : ", name);
    };
  }
}

const s1 = new Student("Aryan", 23);

s1.printStudent();


