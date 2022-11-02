import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";

type Props = {};

export default function HeaderB({}: Props) {
  return (
    <nav className="w-full text-white dark:bg-slate-900 flex p-4 items-center">
      <div className="inline-flex space-x-2 mr-4">
        <img
          src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
          alt="Workflow"
          className="h-8 w-auto"
        />
        <span className="hidden md:block text-slate-900 dark:text-slate-100 font-bold text-2xl">
          Taildrop
        </span>
      </div>

      <ul className="hidden md:flex space-x-4 dark:text-slate-100 text-slate-900">
        <li className="rounded-md dark:text-slate-100 hover:cursor-pointer dark:bg-blue-800  px-4 py-2">
          Home
        </li>
        <li className="px-4 py-2 hover:cursor-pointer">Blog</li>
        <li className="px-4 py-2 hover:cursor-pointer">Portfolio</li>
        <li className="px-4 py-2 hover:cursor-pointer">Resume</li>
      </ul>

      <button
        className="rounded-full bg-blue-500 p-2 md:hidden"
      >
        <Bars3Icon className="h-6 w-6 dark:text-slate-900 text-slate-100" />
      </button>
    </nav>
  );
}