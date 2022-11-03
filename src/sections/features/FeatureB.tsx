import { ChevronRightIcon, Squares2X2Icon } from "@heroicons/react/20/solid";
import React from "react";

type Props = {};

export default function FeatureB({}: Props) {
  return (
    <div className="bg-white py-8 md:py-32 dark:bg-slate-900 dark:text-slate-100 text-slate-900 px-4">
      <div className="space-y-4 flex flex-col justify-center text-center ">
        <h2 className="text-3xl font-medium">
          End to end encryption for your data and privacy
        </h2>
        <p className="mt-4 text-lg text-gray-500  dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          voluptatibus, quas, quidem quos nesciunt.
        </p>
      </div>

      <aside className="grid md:grid-cols-3 gap-4 mt-12">
        {/* 1st feature */}
        <div className="p-4 dark:bg-slate-800 bg-gray-300 rounded-lg">
          <Squares2X2Icon className="h-10 w-10 text-blue-600" />
          <h3 className="text-lg font-medium mt-4">Deal Dashboard</h3>
          <p className="mt-2 text-slate-700 dark:text-slate-400 text-sm font-l">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
        {/* 2th feature */}
        <div className="p-4 dark:bg-slate-800 bg-gray-300 rounded-lg">
          <Squares2X2Icon className="h-10 w-10 text-blue-600" />
          <h3 className="text-lg font-medium mt-4">Deal Dashboard</h3>
          <p className="mt-2 text-slate-700 dark:text-slate-400 text-sm font-l">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
        {/* 3th feature */}
        <div className="p-4 dark:bg-slate-800 bg-gray-300 rounded-lg">
          <Squares2X2Icon className="h-10 w-10 text-blue-600" />
          <h3 className="text-lg font-medium mt-4">Deal Dashboard</h3>
          <p className="mt-2 text-slate-700 dark:text-slate-400 text-sm font-l">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>


        
      </aside>
    </div>
  );
}
