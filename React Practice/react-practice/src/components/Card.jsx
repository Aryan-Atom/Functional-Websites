import React from "react";

const Card = () => {
  return (
    <div className=" h-64 w-52 bg-zinc-800 rounded-md p-4 flex flex-col items-center gap-4 border border-zinc-500">
      <div className="h-24 w-24 rounded-full overflow-hidden">
        <img
          src="https://storage.googleapis.com/kagglesdsdata/datasets/1392907/2309103/Pokemon%20Dataset/arbok.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20251129%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251129T033352Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=9f500c2e899845ef43db02a5a2060d65bba50000645a4bd35da6a6528520401925050e033136aaf4844dacdf31c7543325a7069b9eef4dad68e736278979f8e69487880d709c4a73e2d5089f4e7c3abadc2fe9c35ab9f9e956a368ab673abbe3cc4ecdc2b7ae0a0de5709feeffbc9c79f8b9cf3d9050d56c11617b41585d97eb9a86abeb1dc5d2ba8458017b99f1028f257c74f1218fee361118015fd3576c3fbeddb0ad3354a56d92688e06e7eb84f663245181c2be650325562f2e28adffdd2ab2ea221f0e111e535229ad12fc2d160ebeb39b08c608fa7e27f3f99ad0902c5924307cf2d814dc07db141b687465ad2b8c3d211a4b99641dfcfc223f96decb"
          alt="profile-img"
          className="w-full h-full"
        />
      </div>
      <div className="font-semibold bg-zinc-700 p-1 px-8 rounded-full text-white">Arbok</div>
      <div className="text-zinc-100">Lorem ipsum dolor sit amet consectetur adipisicing. Test Arbok</div>
    </div>
  );
};

export default Card;
