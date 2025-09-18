function Book(name , author , date ,code){

    if(!new.target){ // accessing the new property being used or not
        console.error("New keyword not used. Accessing as function, not as a constructor")
    }
    this.name=name;
    this.author=author;
    this.date=date;
    this.code=code;

    this.bookDescription = function(){
      console.log(
        "The book Title is : " + name + "The author is : " + author + "The publish date is" + date + "the code is : " + code 
      )
    }
}

const book1 = new Book("Abc" , "Xyz"  , "12/01/2025" , "#CODR");

console.log(book1.bookDescription())