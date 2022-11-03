import {
  ChevronRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import React from "react";

type Props = {};

export default function FeatureD({}: Props) {
  return (
    <div className="bg-white py-8 md:py-32 dark:bg-slate-900 dark:text-slate-100 text-slate-900 px-4">
      <div className="space-y-4 flex flex-col justify-center text-center ">
        <h2 className="text-3xl font-medium">
          Support that's always there for you
        </h2>
        <p className="mt-4 text-lg text-gray-500  dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          voluptatibus, quas, quidem quos nesciunt.
        </p>
      </div>

      <aside className="grid md:grid-cols-2 gap-4 mt-12">
        {/* 1st feature */}
        <div className="flex items-center gap-4 p-4 dark:bg-slate-800 bg-slate-100 rounded-lg ">
          <div className="w-16 h-16 bg-blue-500 flex justify-center items-center rounded-full">
            <PhoneIcon className="h-10 w-10 text-white" />
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="text-lg font-medium">Talk with customer service</h3>
            <p className="mt-2 text-slate-700 dark:text-slate-400 text-sm font-l">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>
        </div>

        {/* 2th feature */}
        <div className="flex items-center gap-4 p-4 dark:bg-slate-800 bg-slate-100 rounded-lg ">
          <div className="w-16 h-16 bg-blue-500 flex justify-center items-center rounded-full">
            <EnvelopeIcon className="h-10 w-10 text-white" />
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="text-lg font-medium ">Email your question</h3>
            <p className="mt-2 text-slate-700 dark:text-slate-400 text-sm font-l">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
