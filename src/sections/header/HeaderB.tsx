import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";

type Props = {};

export default function HeaderB({}: Props) {
  return (
    <nav className="w-full text-white gap-2 dark:bg-slate-900 flex p-4 justify-between items-center">
      <div className="hidden md:inline-flex space-x-2 mr-4">
        <img
          src="/public/vite.svg"
          alt="Taildrop"
          className="h-8 w-auto"
        />
        <span className="md:block text-slate-900 dark:text-slate-100 font-bold text-2xl">
          Taildrop
        </span>
      </div>

      <input className="flex-1 py-2 px-4 rounded-lg max-w-xl" placeholder="Search" />

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
