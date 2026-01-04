import React from "react";

const Work = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1634655685926-944d0254af90?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=836&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "53%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1682124690265-f9135fbe81bc?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "60%",
      left: "52%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1682124865982-86f0aa859b01?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "59%",
      left: "49%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1682124841272-aee539eea374?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "62%",
      left: "53%",
      isActive: false,
    },
  ];
  return (
    <div className="w-full ">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] leading-none tracking-tight select-none">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  src={elem.url}
                  className="absolute w-60 rounded-md -translate-y-[50%] -translate-x-[50%]"
                  style={{ top: elem.top, left: elem.left }}
                  alt="work-image"
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
