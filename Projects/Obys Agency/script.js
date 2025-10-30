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
    duration: 0.4,
    delay: 3,
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

 videoContainer.addEventListener("click", () => {
  if (thumbnail.style.opacity === "0" || thumbnail.style.opacity === "") {
    thumbnail.style.opacity = "1";
  } else {
    thumbnail.style.opacity = "0";
  }
});

  videoContainer.addEventListener("mousemove", (e) => {
    const rect = videoContainer.getBoundingClientRect();

    // Calculate position relative to the container
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to("#video-cursor", {
      top: y,
      left: x,
    });
  });
};

videoCursorAnim();
