const locomotive = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
};
locomotive();

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
