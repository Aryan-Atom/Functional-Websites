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

// let divs = document.querySelectorAll(".tab");
// let texts = document.querySelectorAll("h3");

// texts[0].style.display = "block";

// divs.forEach(function (div, indx) {
//   div.addEventListener("click", function () {
//     hideAllText();
//     texts[indx].style.display = "block";
//   });
// });

// function hideAllText() {
//   texts.forEach((text) => {
//     text.style.display = "none";
//   });
// }

// Task 7 -> Progress Bar

// let prog = document.querySelector("#progress");
// let h3 = document.querySelector("h3");

// let count = 0;
// let int = setInterval(function () {
//   if (count === 100) {
//     h3.style.opacity= 1;
//     clearInterval(int);
//   }
//   count++;
//   prog.style.width = count + "%";
// }, 100);


// Task - 8  input search

const data = [
  {
    name: "Liam",
    src: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Zara",
    src: "https://images.unsplash.com/photo-1603415526960-f7e0328f45ff?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Ethan",
    src: "https://images.unsplash.com/photo-1531891437562-2a6e6b5d6c30?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Maya",
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Noah",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Luna",
    src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Aiden",
    src: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Chloe",
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Leo",
    src: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Sofia",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];




let input = document.querySelector("input");
let userList = document.querySelector(".total-users")



var pers ="";
data.forEach( function(elem){

  pers += `<div class="user">
          <div class="img">
            <img
              src= ${elem.src}
              alt=""
            />
          </div>
          <div class="name">${elem.name}</div>
        </div>`
})


userList.innerHTML = pers;


input.addEventListener("input" ,function(){
  let match = data.filter(function(elem){
 return elem.name.toLowerCase().startsWith(input.value.toLowerCase());
  })

  let newUsers=""
  match.forEach( function(elem){

  newUsers += `<div class="user">
          <div class="img">
            <img
              src= ${elem.src}
              alt=""
            />
          </div>
          <div class="name">${elem.name}</div>
        </div>`
})
userList.innerHTML = newUsers;

})



