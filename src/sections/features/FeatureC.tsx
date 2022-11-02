import {
  ChevronRightIcon,
  Squares2X2Icon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";
import React from "react";

type Props = {};

export default function FeatureC({}: Props) {
  return (
    <div className="bg-white dark:bg-slate-900 dark:text-slate-100 text-slate-900 p-4">
      <div className="space-y-8">
        <h2 className="text-5xl md:text-center font-semibold">
          Accept payments from any device from any country in the world
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:px-4">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptas, quod, quia, voluptates quae voluptatem quibusdam
              necessitatibus quidem voluptatum quos quas. Quisquam, quae.
            </p>

            <ul className="space-y-4 mt-6">
              <li className="flex items-center space-x-2">
                <CheckCircleIcon className="h-6 w-6 " />
                <p className="text-slate-800 dark:text-slate-100 font-medium ">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircleIcon className="h-6 w-6 " />
                <p className="text-slate-800 dark:text-slate-100 font-medium ">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircleIcon className="h-6 w-6 " />
                <p className="text-slate-800 dark:text-slate-100 font-medium ">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </li>
            </ul>

            <div className="md:space-x-2  space-y-2 md:space-y-0 mt-12">
              <button className="w-full md:w-auto bg-slate-900 border border-slate-900 dark:border-slate-700 dark:bg-slate-700 text-white px-4 py-2 rounded-full">
                Get Started
              </button>
              <button className="w-full md:w-auto border border-slate-900 dark:border-slate-200 dark:text-slate-200 text-slate-900 px-4 py-2 rounded-full">
                See supported countries
              </button>
            </div>
          </div>

          <figure className="w-full">
            <img src="https://source.unsplash.com/random" alt="" className="h-80 rounded-md  w-full object-cover" />
          </figure>
        </div>
      </div>
    </div>
  );
}
