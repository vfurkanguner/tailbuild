import { BeakerIcon, CpuChipIcon, BoltIcon } from "@heroicons/react/20/solid";
import { CheckIcon } from "@heroicons/react/24/solid";

type Props = {};

export default function PricingB({}: Props) {
  return (
    <div className="bg-slate-100 py-8 md:py-32 dark:bg-slate-900 dark:text-slate-100 text-slate-900 px-4">
      <div className="py-8">
        <div className="text-center">
          <h2 className="text-3xl font-medium">Ready to get started?</h2>
          <p className="mt-4  font-light text-gray-500 dark:text-gray-400">
            Choose a plan that's right for you.
          </p>
        </div>

        <aside className="mt-8 md:mt-16">
          <ul className="grid md:grid-cols-3 gap-y-16 md:gap-4">
            {/* 1st plan */}
            <li className="bg-white dark:bg-transparent relative rounded-lg dark:border dark:border-slate-500 p-8 space-y-4">
              <h3 className="text-2xl flex items-center text-blue-700 font-medium">
                <CpuChipIcon className="w-6 h-6 inline-block" />
                <span className="ml-2 dark:text-slate-100 text-slate-900">Basic</span>
              </h3>
              <p className="text-xs text-slate-500">
                Perfect for small teams and freelancers.
              </p>
              <div className="inline-flex items-end space-x-2">
                <span className="font-semibold text-5xl mt-4 block">$0 </span>
                <span className="font-light text-slate-400">/ month</span>
              </div>

              <button className="w-full mt-4 bg-blue-600 font-medium text-white px-4 py-2 rounded-lg">
                Try for free
              </button>

              <ul className="space-y-2 text-sm text-left">
                <li className="flex space-x-2 items-center">
                  <CheckIcon className="w-5 h-5 text-blue-600  " />
                  <span className="flex-1">Annual Deliveries</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <CheckIcon className="w-5 h-5 text-blue-600  " />
                  <span className="flex-1">Users</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <CheckIcon className="w-5 h-5 text-blue-600  " />
                  <span className="flex-1">Request</span>
                </li>
              </ul>

              <p className="text-xs text-slate-500 mt-4">
                * All plans include a 14-day free trial.
              </p>

              <span className="text-center  font-medium absolute -bottom-8 rounded-b left-0 right-0 p-4 bg-slate-200">
                <a
                  href="#"
                  className="text-sm text-slate-900 hover:text-blue-700"
                >
                  See all features
                </a>
              </span>
            </li>

            {/* 2th plan */}
            <li className="bg-white dark:bg-transparent relative rounded-lg dark:border dark:border-slate-500 p-8 space-y-4">
              <h3 className="text-2xl flex items-center text-blue-700 font-medium">
                <BeakerIcon  className="w-6 h-6 inline-block" />
                <span className="ml-2 text-slate-900 dark:text-slate-100">Pro</span>
              </h3>
              <p className="text-xs text-slate-500">
                Perfect for small teams and freelancers.
              </p>
              <div className="inline-flex items-end space-x-2">
                <span className="font-semibold text-5xl mt-4 block">$19 </span>
                <span className="font-light text-slate-400">/ month</span>
              </div>

              <button className="w-full mt-4 bg-blue-600 font-medium text-white px-4 py-2 rounded-lg">
                Try for free
              </button>

              <ul className="space-y-2 text-sm text-left">
                <li className="flex space-x-2 items-center">
                  <CheckIcon className="w-5 h-5 text-blue-600  " />
                  <span className="flex-1">Annual Deliveries</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <CheckIcon className="w-5 h-5 text-blue-600  " />
                  <span className="flex-1">Annual Deliveries</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <CheckIcon className="w-5 h-5 text-blue-600  " />
                  <span className="flex-1">Users</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <CheckIcon className="w-5 h-5 text-blue-600  " />
                  <span className="flex-1">Request</span>
                </li>
              </ul>

              <p className="text-xs text-slate-500 mt-4">
                * All plans include a 14-day free trial.
              </p>

              <span className="text-center  font-medium absolute -bottom-8 rounded-b left-0 right-0 p-4 bg-slate-200">
                <a
                  href="#"
                  className="text-sm text-slate-900 hover:text-blue-700"
                >
                  See all features
                </a>
              </span>
            </li>
            {/* 3th plan */}
            <li className="bg-blue-700 text-white relative rounded-lg dark:border dark:border-slate-500 p-8 space-y-4">
              <h3 className="text-2xl flex items-center text-blue-700 font-medium">
                <BoltIcon className="text-white w-6 h-6 inline-block" />
                <span className="ml-2 text-slate-100">Ultimate</span>
              </h3>
              <p className="text-xs text-slate-200">
                Perfect for small teams and freelancers.
              </p>
              <div className="inline-flex items-end space-x-2">
                <span className="font-semibold text-5xl mt-4 block">$99 </span>
                <span className="font-light text-slate-300">/ month</span>
              </div>

              <button className="w-full mt-4 bg-blue-900 font-medium text-white px-4 py-2 rounded-lg">
                Contact us
              </button>

              <ul className="space-y-2 text-sm text-left">
                <li className="flex space-x-2 items-center">
                  <CheckIcon className="w-5 h-5 text-blue-600  " />
                  <span className="flex-1">Annual Deliveries</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <CheckIcon className="w-5 h-5 text-blue-600  " />
                  <span className="flex-1">Annual Deliveries</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <CheckIcon className="w-5 h-5 text-blue-600  " />
                  <span className="flex-1">Annual Deliveries</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <CheckIcon className="w-5 h-5 text-blue-600  " />
                  <span className="flex-1">Users</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <CheckIcon className="w-5 h-5 text-blue-600  " />
                  <span className="flex-1">Request</span>
                </li>
              </ul>

              <p className="text-xs text-slate-100 mt-4">
                * All plans include a 14-day free trial.
              </p>

              <span className="text-center dark:bg-slate-800 font-medium absolute -bottom-8 rounded-b left-0 right-0 p-4 bg-slate-200">
                <a
                  href="#"
                  className="text-sm text-slate-900 hover:text-blue-700 dark:text-slate-100"
                >
                  See all features
                </a>
              </span>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
