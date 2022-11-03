import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";

type Props = {};

export default function HeaderC({}: Props) {
  return (
    <nav className="w-full text-white dark:bg-slate-900 flex p-4 items-center justify-between">
      <div className="inline-flex space-x-2 mr-4">
        <div className="h-8 w-auto">
          <svg
            width="32"
            height="32"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_355_2996"
              maskUnits="userSpaceOnUse"
              x="0"
              y="20"
              width="43"
              height="44"
            >
              <path d="M0 20.6841H42.4212V63.1383H0V20.6841Z" fill="white" />
            </mask>
            <g mask="url(#mask0_355_2996)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.03937 26.9694L6.1608 22.846C8.87543 20.1275 13.3267 20.1275 16.0414 22.846L40.2557 47.0875C42.9723 49.8041 42.9723 54.2651 40.2557 56.9817L36.1382 61.1012C33.4177 63.8236 28.9664 63.8236 26.2557 61.1012L2.03937 36.8655C-0.67914 34.1431 -0.67914 29.6918 2.03937 26.9694Z"
                fill="#E11D48"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.0574 11.5954L27.9458 1.70125C30.2063 -0.567084 33.9067 -0.567084 36.1731 1.70125L46.0575 11.5954C48.3259 13.8637 48.3259 17.5738 46.0575 19.8382L36.1731 29.7305C33.9067 31.9968 30.2063 31.9968 27.9458 29.7305L18.0574 19.8382C15.793 17.5738 15.793 13.8637 18.0574 11.5954Z"
              fill="#2563EB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M37.2442 33.2776L49.5949 20.9075C51.2307 19.2795 53.8949 19.2795 55.5229 20.9075L62.7761 28.1685C64.408 29.7985 64.408 32.4724 62.7761 34.1042L50.4215 46.4705C48.7896 48.1004 46.1216 48.1004 44.4897 46.4705L37.2442 39.2153C35.6123 37.5834 35.6123 34.9095 37.2442 33.2776Z"
              fill="#4F46E5"
            />
          </svg>
        </div>
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
