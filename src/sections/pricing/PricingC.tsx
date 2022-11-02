import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {};

export default function PricingC({}: Props) {
  return (
    <div className="bg-white dark:bg-slate-900 dark:text-slate-100 text-slate-900 p-4">
      <div className="">
        <div className="">
          <h2 className="text-3xl font-medium">
            We&apos;ve got a pricing plan that&apos; perfect for you
          </h2>
          <p className="mt-4  font-light text-gray-500 dark:text-gray-400">
            Choose a plan that&apos;s right for you.
          </p>
        </div>

        <div className="my-8">
          <ul className="grid md:grid-cols-4  gap-y-16 md:gap-4">
            <li />
            {/* 1st plan */}
            <li className="flex flex-col gap-2 bg-slate-100 dark:bg-transparent dark:border dark:border-slate-600 py-6 px-4 rounded-xl">
              <h3 className="text-2xl font-semibold ">Basic Plan</h3>
              <p className="text-slate-700 dark:text-slate-400 font-light">
                Perfect for small teams and freelancers.
              </p>

              <span className="">
                <span className="text-4xl">$0 </span>
                <span>/ month </span>
              </span>

              <button className="bg-slate-700 text-slate-100 px-6 py-2 rounded-lg">
                Try for free
              </button>
            </li>
            {/* 2th plan */}
            <li className="flex flex-col gap-2 bg-slate-100 dark:bg-transparent dark:border dark:border-slate-600 py-6 px-4 rounded-xl">
              <h3 className="text-2xl font-semibold ">Pro Plan</h3>
              <p className="text-slate-700 dark:text-slate-400 font-light">
                Perfect for small teams and freelancers.
              </p>

              <span className="">
                <span className="text-4xl">$0 </span>
                <span>/ month </span>
              </span>

              <button className="bg-slate-700 text-slate-100 px-6 py-2 rounded-lg">
                Try for free
              </button>
            </li>
            {/* 3th plan */}
            <li className="flex flex-col gap-2 bg-slate-100 dark:bg-transparent dark:border dark:border-slate-600 py-6 px-4 rounded-xl">
              <h3 className="text-2xl font-semibold ">Entreprise Plan</h3>
              <p className="text-slate-700 dark:text-slate-400 font-light">
                Perfect for small teams and freelancers.
              </p>

              <span className="">
                <span className="text-4xl">$0 </span>
                <span>/ month </span>
              </span>

              <button className="bg-slate-700 text-slate-100 px-6 py-2 rounded-lg">
                Try for free
              </button>
            </li>
          </ul>
        </div>

        <table className="w-full">
          <thead className="">
            <tr>
              <th className="w-1/4 text-left" />
              <th className="w-1/4 text-left">Basic</th>
              <th className="w-1/4 text-left">Pro</th>
              <th className="w-1/4 text-left">Enterprise</th>
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-slate-600">
            <tr>
              <td className="font-medium py-2">Basic Features</td>
              <td>
                <XMarkIcon className="h-6 w-6 text-red-500" />
              </td>
              <td>
                <CheckIcon className="h-6 w-6 text-green-500" />
              </td>
              <td>
                <CheckIcon className="h-6 w-6 text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="font-medium py-2">Support</td>
              <td>
                <CheckIcon className="h-6 w-6 text-green-500" />
              </td>
              <td>
                <CheckIcon className="h-6 w-6 text-green-500" />
              </td>
              <td>
                <CheckIcon className="h-6 w-6 text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="font-medium py-2">Automated workflows</td>
              <td>
                <XMarkIcon className="h-6 w-6 text-red-500" />
              </td>
              <td>
                <XMarkIcon className="h-6 w-6 text-red-500" />
              </td>
              <td>
                <CheckIcon className="h-6 w-6 text-green-500" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
