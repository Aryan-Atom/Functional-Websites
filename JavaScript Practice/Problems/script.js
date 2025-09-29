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

// let inps = document.querySelectorAll('input[type="text"]');
// let form = document.querySelector("form");
// let h3 = document.querySelector("h3");

// form.addEventListener("submit" , function(ev){

//  ev.preventDefault();

//  for(let i = 0 ; i < inps.length ; i++ ){

//     if(inps[i].value === ""){
//         h3.textContent="Error";
//         break;
//     }
//     else{
//         h3.textContent="ok";
//     }
//  }

//  if(inp1.value === '' || inp2.value === ''){
//     alert("Fill the fields")
//  }
// })

// Task 4 -- Add Remove List items

// let inp = document.querySelector("#inp");

// let add = document.querySelector("#add");
// let remove = document.querySelector("#remove");

// let ul = document.querySelector("ul");

// let li;

// add.addEventListener("click", function (e) {
//   if (inp.value === "") {
//   } else {
//     li = document.createElement("li");
//     li.textContent = inp.value;
//     ul.appendChild(li);
//     inp.value="";
//   }
// });

// remove.addEventListener("click", function (e) {
//   ul.removeChild(li)
// });

//Task - 5 -> Timer

// let h3 = document.querySelector("h3");
// let start = document.querySelector("#start");
// let Stop = document.querySelector("#stop");

// let dig;

// start.addEventListener("click" , function(){
// let count = 0;
// dig =  setInterval(function(){
//     h3.textContent = count;
//     count++;
// },1000)
// })

// Stop.addEventListener("click" ,  function(){
//     clearInterval(dig);
// })

// Task-6 -> tab change display

let divs = document.querySelectorAll(".tab");
let texts = document.querySelectorAll("h3");

texts[0].style.display = "block";

divs.forEach(function (div, indx) {
  div.addEventListener("click", function () {
    hideAllText();
    texts[indx].style.display = "block";
  });
});

function hideAllText() {
  texts.forEach((text) => {
    text.style.display = "none";
  });
}
