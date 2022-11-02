import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";

type Props = {};

export default function HeaderC({}: Props) {
  return (
    <nav className="w-full text-white dark:bg-slate-900 flex p-4 items-center justify-between">
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

      <ul className="hidden md:flex space-x-2 dark:text-slate-100 text-slate-900">
        <li className="hover:cursor-pointer  rounded-md dark:text-slate-100 dark:bg-blue-800  px-4 py-2">
          Home
        </li>
        <li className="px-4 py-2 hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800  rounded-md">
          Blog
        </li>
        <li className="px-4 py-2 hover:cursor-pointer hover:bg-slate-100  dark:hover:bg-slate-800 rounded-md">
          Portfolio
        </li>
        <li className="px-4 py-2 hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800  rounded-md">
          Resume
        </li>
      </ul>

      <div className="space-x-1 hidden md:block">
        <button
          type="button"
          className="px-6 py-2 border rounded-full dark:text-slate-100 text-slate-900"
        >
          Sign Up
        </button>
        <button
          type="button"
          className="px-6 py-2 border border-blue-600 bg-blue-600  text-slate-100  rounded-full"
        >
          Sign In
        </button>
      </div>

      <button className="rounded-full bg-blue-600 p-2 md:hidden">
        <Bars3Icon className="h-6 w-6 text-slate-100" />
      </button>
    </nav>
  );
}
