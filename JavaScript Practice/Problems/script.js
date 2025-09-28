// Task 1
// let para = document.querySelector("p");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     para.textContent =  "Starting..."
// })



// Task 2 - Swap image

// let img1 = document.querySelector("#img1");
// let img2 = document.querySelector("#img2");


// let btn = document.querySelector("button");

// btn.addEventListener("click" , function(){

//     let src1 = img1.src;
//     let src2 = img2.src;

//     img1.src = src2;
//     img2.src = src1;

// })


// Task-3 - Validation Check on Form Submit

// let inp1 = document.querySelector("#inp1");
// let inp2 = document.querySelector("#inp2");

let inps = document.querySelectorAll('input[type="text"]');
let form = document.querySelector("form");
let h3 = document.querySelector("h3");

form.addEventListener("submit" , function(ev){

 ev.preventDefault();


 for(let i = 0 ; i < inps.length ; i++ ){

    if(inps[i].value === ""){
        h3.textContent="Error";
        break;
    }
    else{
        h3.textContent="ok";
    }
 }

//  if(inp1.value === '' || inp2.value === ''){
//     alert("Fill the fields")
//  }
})