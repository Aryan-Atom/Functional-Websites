// let btn = document.querySelector("#header");
// let container = document.querySelector("#card-container");

// btn.addEventListener("click", () => {
//   fetch("https://randomuser.me/api/")
//     .then((res) => res.json())
//     .then((data) => {
//       let response = data?.results[0];
//       container.innerHTML += `<div class="card bg-zinc-800 w-80 h-50 rounded-lg text-white">
//           <div class="user py-3 mt-2 mx-3 text-xl border-b-2">${response?.name?.first}</div>
//           <div class="gender mt-3 mx-3 text-lg font-semibold opacity-50">
//             Gender : ${response?.gender}
//           </div>
//           <div class="desc mt-2 mx-3 opacity-75">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolor
//             ducimus neque sed ratione ullam.
//           </div>
//         </div>`;
//     });
// });


let block = document.querySelector("#block");
let unblock = document.querySelector("#unblock");
const status = document.querySelector("#status");

block.addEventListener("click", () => {
    if (localStorage.getItem("block") === "false") {
        localStorage.setItem("block", true);
        setStatus("Blocked");
    }
});

unblock.addEventListener("click", () => {
    if (localStorage.getItem("block") === "true") {
        localStorage.setItem("block", false);
        setStatus("Un-Blocked");
    }
});

const setStatus = (state) => {
    status.textContent = state; 
};


if (localStorage.getItem("block") === "true") {
    setStatus("Blocked");
} else {
    localStorage.setItem("block", false);
    setStatus("Un-Blocked");
}
