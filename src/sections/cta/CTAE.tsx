import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import React from "react";

type Props = {};

export default function CTAE({}: Props) {
  return (
    <div className="flex px-4 py-8 md:py-32 flex-col md:flex-row text-slate-900 dark:text-slate-100 items-center bg-white dark:bg-slate-900">
      <figure className="w-full">
        <img
          src="https://img.freepik.com/free-photo/charming-businesswoman-glasses-striped-shirt-working-with-laptop-computer-while-siting-home_171337-13027.jpg?w=1480&t=st=1667380980~exp=1667381580~hmac=c5ee009e37cbc863c044578184ab0e6e2fe4f16fe237d3c02b1545cd0863ace5"
          className="w-full h-96 object-cover rounded-lg"
          alt="hero"
        />
      </figure>

      <div className="w-full p-4 space-y-4">
        <div className="flex items-center gap-4 text-sm font-light text-slate-600">
          01
          <span className="w-16 h-px bg-black dark:bg-slate-500" />
          What is Tailbuild?
        </div>
        <h1 className="md:text-5xl text-4xl font-semibold leading-tight">
          Start your business
          <span className="text-blue-600"> with us</span>
        </h1>
        <p className="text-slate-500 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 w-full  md:w-auto py-3 px-8 rounded-md text-lg text-slate-100">
            Join now
            <ArrowUpRightIcon className="w-4 h-4 ml-2" />
          </button>
          <button className=" border border-blue-600 hover:bg-blue-700 w-full  md:w-auto py-3 px-8 rounded-md text-lg text-blue-600">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
