import React from "react";

const Footer = () => {
  return (
    <div className="full">
      <div className="max-w-screen-xl py-10 flex gap-32 mx-auto">
        <div className="basis-1/2 text-[11.5rem] tracking-tight leading-none ">
          refokus.
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h1 className="mb-14 text-zinc-500">Socials</h1>
            {["instagram", "twitter", "LinkedIn"].map((elem, indx) => (
              <a key={indx} className="block mt-3 text-zinc-600">
                {elem}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h1 className="mb-14 text-zinc-500">Socials</h1>
            {["instagram", "twitter", "LinkedIn"].map((elem, indx) => (
              <a key={indx} className="block mt-3 text-zinc-600">
                {elem}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex items-end flex-col">
            <p className="text-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              iusto assumenda nam placeat quod, commodi voluptatem quibusdam
            </p>
            <img
              src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
              alt=""
              className="w-46 mt-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
