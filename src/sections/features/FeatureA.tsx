import { ChevronRightIcon, Squares2X2Icon } from "@heroicons/react/20/solid";
import React from "react";

type Props = {};

export default function FeatureA({}: Props) {
  return (
    <div className="bg-white dark:bg-slate-900 dark:text-slate-100 text-slate-900 p-4">
      <div className="space-y-4">
        <h2 className="text-3xl font-medium max-w-lg">
          End to end encryption for your data and privacy
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          voluptatibus, quas, quidem quos nesciunt.
        </p>

        <span className="py-1 text-blue-600 inline-flex items-center">
          <a href="#" className="border-b border-blue-200">
            View all features
          </a>
          <ChevronRightIcon className="h-5 w-5 mr-2" />
        </span>
      </div>

      <aside className="grid md:grid-cols-4 gap-4 mt-12">
        {/* 1st feature */}
        <div className="">
          <Squares2X2Icon className="h-10 w-10 text-blue-600" />
          <h3 className="text-lg font-medium mt-4">Deal Dashboard</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm font-l">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>

        {/* 2nd feature */}
        <div className="">
          <Squares2X2Icon className="h-10 w-10 text-blue-600" />
          <h3 className="text-lg font-medium mt-4">Deal Dashboard</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm font-l">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
        {/* 3nd feature */}
        <div className="">
          <Squares2X2Icon className="h-10 w-10 text-blue-600" />
          <h3 className="text-lg font-medium mt-4">Deal Dashboard</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm font-l">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
        {/* 4nd feature */}
        <div className="">
          <Squares2X2Icon className="h-10 w-10 text-blue-600" />
          <h3 className="text-lg font-medium mt-4">Deal Dashboard</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm font-l">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
      </aside>
    </div>
  );
}
