import React from "react";

type Props = {};

export default function HeroC({}: Props) {
  return (
    <div className="text-white bg-white dark:bg-slate-900">
      <div className="h-screen relative flex items-center  w-full bg-cover   bg-[url('https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1380&t=st=1667383078~exp=1667383678~hmac=c27263d039cae5ebb825267ad2103aa2dd6f031d23ffb0638152782c3ed740b8')]">
        <div className="w-full relative z-50 p-4 space-y-4 max-w-xl flex mt-8 flex-col">
          <h1 className="lg:text-7xl text-6xl font-bold leading-tight">
            Protect the planet
          </h1>
          <p className="text-slate-100 font-light text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quod, quia, voluptate quae voluptatem quibusdam
          </p>

          <div className="md:space-x-4 space-y-2 md:space-y-0">
            <button className="bg-slate-800 hover:bg-black w-full  md:w-auto py-3 px-8 rounded-md text-lg text-slate-100">
              Get Started
            </button>
            <button className="bg-white hover:bg-slate-300 w-full  md:w-auto py-3 px-8 rounded-md text-lg text-slate-500">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
