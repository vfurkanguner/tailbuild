import { CheckIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

export default function PricingA({}: Props) {
  return (
    <div className="bg-white dark:bg-slate-900 dark:text-slate-100 text-slate-900 p-4">
      <div className="">
        <div className="text-center">
          <h2 className="text-3xl font-medium">Pricing Plans</h2>
          <p className="mt-4  font-light text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quod, quia, voluptate quae voluptatem quibusdam
          </p>
        </div>

        <aside className="mt-8 md:mt-32">
          <ul className="grid md:grid-cols-3 gap-4">
            {/* 1st plan */}
            <li className="shadow-lg rounded-lg dark:border dark:border-slate-500 p-8 space-y-4 text-center">
              <h3 className="text-2xl text-blue-700 font-medium">Basic</h3>
              <span className="font-semibold">$0 </span>
              <span className="font-light text-slate-400">/ month</span>

              <p className="text-xs text-slate-500">
                The basic plan is free and includes all the basic features.
              </p>

              <ul className="space-y-2 text-sm text-left">
                <li className="flex space-x-2 items-center">
                  <div className="w-6 h-6 inline-flex justify-center items-center rounded-full bg-blue-600 text-white">
                    <CheckIcon className="w-4 h-4  " />
                  </div>
                  <span className="flex-1">Annual Deliveries</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <div className="w-6 h-6 inline-flex justify-center items-center rounded-full bg-blue-600 text-white">
                    <CheckIcon className="w-4 h-4  " />
                  </div>
                  <span className="flex-1">Users</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <div className="w-6 h-6 inline-flex justify-center items-center rounded-full bg-blue-600 text-white">
                    <CheckIcon className="w-4 h-4  " />
                  </div>
                  <span className="flex-1">Request</span>
                </li>
              </ul>

              <button className="w-full mt-4 bg-blue-100 font-medium text-blue-700 px-4 py-2 rounded-lg">
                Try for free
              </button>
            </li>
            {/* MOST POPULAR */}
            <li className="dark:shadow-lg  ring-2 ring-blue-600  md:-translate-y-12 rounded-lg p-8 space-y-4 text-center">
              <h3 className="text-2xl text-blue-700 font-medium">Premium</h3>
              <span className="font-semibold">$99 </span>
              <span className="font-light text-slate-400">/ month</span>

              <p className="text-xs text-slate-500">
                The basic plan is free and includes all the basic features.
              </p>

              <ul className="space-y-2 text-sm text-left">
                <li className="flex space-x-2 items-center">
                  <div className="w-6 h-6 inline-flex justify-center items-center rounded-full bg-blue-600 text-white">
                    <CheckIcon className="w-4 h-4  " />
                  </div>
                  <span className="flex-1">Annual Deliveries</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <div className="w-6 h-6 inline-flex justify-center items-center rounded-full bg-blue-600 text-white">
                    <CheckIcon className="w-4 h-4  " />
                  </div>
                  <span className="flex-1">Users</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <div className="w-6 h-6 inline-flex justify-center items-center rounded-full bg-blue-600 text-white">
                    <CheckIcon className="w-4 h-4  " />
                  </div>
                  <span className="flex-1">Request</span>
                </li>
              </ul>

              <button className="w-full mt-4 bg-blue-600 font-medium text-white px-4 py-2 rounded-lg">
                Try for free
              </button>
            </li>
            {/* 3rd plan */}
            <li className="shadow-lg rounded-lg dark:border dark:border-slate-500 p-8 space-y-4 text-center">
              <h3 className="text-2xl text-blue-700 font-medium">Enterprise</h3>
              <span className="font-semibold">Custom Pricing </span>
              <span className="font-light text-slate-400">/ month</span>

              <p className="text-xs text-slate-500">
                The basic plan is free and includes all the basic features.
              </p>

              <ul className="space-y-2 text-sm text-left">
                <li className="flex space-x-2 items-center">
                  <div className="w-6 h-6 inline-flex justify-center items-center rounded-full bg-blue-600 text-white">
                    <CheckIcon className="w-4 h-4  " />
                  </div>
                  <span className="flex-1">Annual Deliveries</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <div className="w-6 h-6 inline-flex justify-center items-center rounded-full bg-blue-600 text-white">
                    <CheckIcon className="w-4 h-4  " />
                  </div>
                  <span className="flex-1">Users</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <div className="w-6 h-6 inline-flex justify-center items-center rounded-full bg-blue-600 text-white">
                    <CheckIcon className="w-4 h-4  " />
                  </div>
                  <span className="flex-1">Request</span>
                </li>
              </ul>

              <button className="w-full mt-4 bg-blue-100 font-medium text-blue-700 px-4 py-2 rounded-lg">
                Try for free
              </button>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
