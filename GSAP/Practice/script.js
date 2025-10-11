// gsap.to("#box" , {
//     x:1000,
//     rotate:360,
//     duration:2,
//     backgroundColor:"blue",
//     delay:1
// })

//Initial -> Final = to

// gsap.from("#box" , {
//     x:1000,
//     rotate:360,
//     duration:2,
//     backgroundColor:"blue",
//     delay:1
// })

//Final -> Initial from



// Use of Timeline

//  const tl =  gsap.timeline();

//  tl.to("#box1" ,{
//     x:1000,
//     scale:2,
//     duration:3,
//     rotate:360
//  })

//   tl.to("#box2" ,{
//     x:800,
//     scale:2,
//     duration:3,
//  })
//   tl.to("#box3" ,{
//     x:900,
//     scale:2,
//     duration:3,
//  })


// #Test site -1


let tl = gsap.timeline()

tl.from("#nav h3" ,{
    y: -50,
    opacity:0,
    delay:0.25,
    duration:0.5,
    stagger:0.1
})

tl.from("#main h1" ,{
    x: -100,
    opacity:0,
 stagger:0.2,   
 duration:0.5,
})

tl.from("#main img",{
    rotate: 30,
    x:150,
    opacity:0,
    stagger:0.5,
    duration:0.5
})