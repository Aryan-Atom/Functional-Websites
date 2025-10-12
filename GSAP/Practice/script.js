// // 🌟 GSAP ANIMATION NOTES 🌟
// // ===========================

// // 🔹 Basic gsap.to() Animation
// // Moves from initial state → to final defined state

// gsap.to("#box", {
//   x: 1000,                  // Move 1000px on X-axis
//   rotate: 360,              // Rotate 360 degrees
//   duration: 2,              // Animation duration: 2 seconds
//   backgroundColor: "blue",  // Change background color
//   delay: 1                  // Start after 1 second
// });


// // 🔹 Basic gsap.from() Animation
// // Moves from defined state → to element's default (final) state

// gsap.from("#box", {
//   x: 1000,                  // Starts 1000px away
//   rotate: 360,              // Starts rotated
//   duration: 2,              // 2-second animation
//   backgroundColor: "blue",  // Starting background color
//   delay: 1                  // Delay before animation starts
// });


// // 🔹 Using GSAP Timeline
// // Allows multiple animations to run in sequence

// const tl = gsap.timeline();  // Create a timeline

// // Animate box1
// tl.to("#box1", {
//   x: 1000,
//   scale: 2,
//   duration: 3,
//   rotate: 360
// });

// // Animate box2
// tl.to("#box2", {
//   x: 800,
//   scale: 2,
//   duration: 3
// });

// // Animate box3
// tl.to("#box3", {
//   x: 900,
//   scale: 2,
//   duration: 3
// });


// // 🔹 Example: Page Intro Animation using Timeline

// let intro = gsap.timeline();

// // Animate navigation text
// intro.from("#nav h3", {
//   y: -50,           // Move up
//   opacity: 0,       // Fade in
//   delay: 0.25,      // Small delay
//   duration: 0.5,    // Quick animation
//   stagger: 0.1      // Animate each h3 one after another
// });

// // Animate main heading
// intro.from("#main h1", {
//   x: -100,
//   opacity: 0,
//   stagger: 0.2,
//   duration: 0.5
// });

// // Animate images
// intro.from("#main img", {
//   rotate: 30,
//   x: 150,
//   opacity: 0,
//   stagger: 0.5,
//   duration: 0.5
// });


// // 🔹 ScrollTrigger Example - Basic
// // Triggers animation when the element comes into view

// gsap.from("#page1 .circle", {
//   rotate: 720,
//   scale: 0,
//   duration: 2
// });

// // 🔹 ScrollTrigger Example - With Options

// gsap.from("#page2 .circle", {
//   rotate: 720,
//   scale: 0,
//   duration: 2,
//   scrollTrigger: {
//     trigger: "#page2 .circle", // Element that triggers the animation
//     markers: true,             // Shows start/end markers
//     start: "top 120%",         // When top of element is 120% from viewport top
//     scrub: 1                   // Sync animation with scroll progress
//   }
// });


// // 🔹 ScrollTrigger with Pin
// // Keeps element fixed while scrolling (pinned effect)

// gsap.to("#page2 h1", {
//   transform: "translateX(-80%)",   // Moves text horizontally
//   scrollTrigger: {
//     trigger: "#page2",             // Section that triggers animation
//     scroller: "body",              // Default scroll container
//     markers: true,                 // Show markers for debugging
//     start: "top 0",                // Start when top of section hits top of viewport
//     end: "top -100%",              // End when section scrolls up
//     scrub: 5,                      // Smooth scroll-linked animation
//     pin: true                      // Keep section pinned
//   }
// });


// // ===========================
// // ✅ SUMMARY
// // gsap.to()    → Animate TO final values
// // gsap.from()  → Animate FROM given values
// // timeline()   → Sequence multiple animations
// // stagger      → Delay between elements
// // scrollTrigger→ Animate on scroll
// // pin          → Fix element while scrolling
// // ===========================





