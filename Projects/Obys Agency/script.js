const tl = gsap.timeline();

tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.4,
  delay: 0.2,
});

let count = 0;
let progress = document.querySelector(".line h6");
const loaderProgress = setInterval(() => {
  if (count < 100) {
    count++;
    progress.textContent = `- ${count}`;
  } else {
    clearInterval(loaderProgress);
  }
}, 60);
