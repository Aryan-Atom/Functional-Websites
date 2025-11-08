const tl = gsap.timeline();

const loadingAnimation = () => {
  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.4,
    delay: 0.2,
  });
  tl.to(" .line h2", {
    animationName: "textAnimation",
    opacity: 1,
  });
  tl.from("#loader-progress ", {
    opacity: 0,
    onStart: function () {
      let count = 0;
      let progress = document.querySelector(".line h5");
      const loaderProgress = setInterval(() => {
        if (count < 100) {
          count++;
          progress.textContent = count;
        } else {
          clearInterval(loaderProgress);
        }
      }, 32);
    },
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0, //
    delay: 0, //
  });

  tl.from("#page-1", {
    delay: 0.2,
    y: 1600,
    duration: 0.5,
    opacity: 0,
    ease: Power4,
  });
  tl.to("#loader", {
    display: "none",
  });
};
loadingAnimation();

const cursorAnimation = () => {
  document.addEventListener("mousemove", function (coOrds) {
    gsap.to("#cursor ", {
      top: coOrds.y,
      left: coOrds.x,
    });
  });

  Shery.makeMagnet("#menu-items h4");
};
cursorAnimation();

const videoCursorAnim = () => {
  const videoContainer = document.querySelector("#video-container");

  const thumbnail = document.querySelector("#thumbnail");
  videoContainer.addEventListener("mousemove", () => {
    document.querySelector("#cursor").style.display = "none";
  });
  videoContainer.addEventListener("mouseleave", () => {
    document.querySelector("#cursor").style.display = "initial";
  });

  videoContainer.addEventListener("click", () => {
    if (thumbnail.style.opacity === "0") {
      thumbnail.style.opacity = "1";
    } else {
      thumbnail.style.opacity = "0";
    }
  });

  videoContainer.addEventListener("mousemove", (e) => {
    const rect = videoContainer.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to("#video-cursor", {
      top: y,
      left: x,
    });
  });
};

videoCursorAnim();

// const hoverWorkAnimation = () => {
//   const container = document.querySelector("#hero-work");
//   const hoverDiv = document.querySelector("#hoverEl");

//   container.addEventListener("mousemove", (dets) => {
//     console.log("click")
//     const rect = container.getBoundingClientRect();

//     const x = dets.clientX - rect.left;

//     hoverEl.style.opacity = 1;
//     hoverEl.style.left = `${x}px`;
//   });

//   container.addEventListener("mouseleave",(e)=>{
//  hoverEl.style.opacity = 0;
//   })
// };
// hoverWorkAnimation();
