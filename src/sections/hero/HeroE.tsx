import React from "react";
import classNames from "../../utils/classNames";

type Props = {};

export default function HeroE({}: Props) {
  return (
    <div
      className={classNames(
        "flex flex-col md:flex-row text-slate-900 dark:text-slate-100 items-center bg-white dark:bg-slate-900"
      )}
    >
      <div className="w-full p-8 space-y-4">
        <h1 className="text-5xl font-bold leading-tight">
          The best way to
          <span className="text-blue-600"> grow your business</span>
        </h1>
        <p className="text-slate-500 font-light text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
        </p>

        <div className="w-full space-y-3">
          <label htmlFor="email" className="">
            Sign up for launch updates
          </label>
          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border dark:text-slate-900 border-slate-300 rounded-md py-2 px-4"
            />
            <button className="bg-blue-600 w-full  md:w-auto px-6 py-2 rounded-md text-lg text-slate-100">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-slate-500">
            By subscribing, you agree to our{" "}
            <a href="#" className="text-blue-700 font-medium underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>

      <figure className="w-full">
        <img
          src="https://img.freepik.com/free-photo/charming-businesswoman-glasses-striped-shirt-working-with-laptop-computer-while-siting-home_171337-13027.jpg?w=1480&t=st=1667380980~exp=1667381580~hmac=c5ee009e37cbc863c044578184ab0e6e2fe4f16fe237d3c02b1545cd0863ace5"
          className="w-full h-72 rounded-lg object-cover"
          alt="hero"
        />
      </figure>
    </div>
  );
}
