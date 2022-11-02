import React from "react";

type Props = {};

export default function HeroA({}: Props) {
  return (
    <div className="flex h-screen flex-col md:flex-row text-slate-900 dark:text-slate-100 items-center bg-white dark:bg-slate-900">
      <div className="w-full p-4 space-y-4">
        <h1 className="text-5xl font-bold leading-tight">
          Start your business
          <span className="text-blue-600"> with us</span>
        </h1>
        <p className="text-slate-500 font-light text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
        </p>
        <button className="bg-blue-600 w-full  md:w-auto py-3 px-8 rounded-md text-lg text-slate-100">Get Started</button>
      </div>

      <figure className="w-full">
        <img
          src="https://img.freepik.com/free-photo/charming-businesswoman-glasses-striped-shirt-working-with-laptop-computer-while-siting-home_171337-13027.jpg?w=1480&t=st=1667380980~exp=1667381580~hmac=c5ee009e37cbc863c044578184ab0e6e2fe4f16fe237d3c02b1545cd0863ace5"
          className="w-full h-96 object-cover"
          alt="hero"
        />
      </figure>
    </div>
  );
}
