import React from "react";

type Props = {};

export default function HeroB({}: Props) {
  return (
    <div className="text-slate-900 dark:text-slate-100 items-center bg-white dark:bg-slate-900">
      <div className="h-screen relative flex justify-center  w-full bg-cover   bg-[url('https://img.freepik.com/free-photo/businesspeople-standing-outside-office-building_107420-74307.jpg?w=1480&t=st=1667381774~exp=1667382374~hmac=1483cbc0d5cd3ba36228464caaff69810a1f835404a46aa1536e76ef56855c12')]">
        <div className="absolute inset-0 bg-white opacity-40" />
        <div className="w-full relative z-50 p-4 space-y-4 max-w-xl flex items-center text-center mt-8 flex-col">
          <h1 className="lg:text-7xl text-5xl  dark:text-slate-900 font-bold leading-tight">
            We're changing the
            <span className="text-blue-600"> whole game.</span>
          </h1>
          <p className="text-slate-500 font-light text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quod, quia, voluptate quae voluptatem quibusdam
          </p>
          <button className="bg-blue-600 w-full  md:w-auto py-3 px-8 rounded-md text-lg text-slate-100">
            Get Started
          </button>
          <button className="bg-white w-full  md:w-auto py-3 px-8 rounded-md text-lg text-slate-500">
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
}
