import React from "react";
import Logo from "../assets/LOGO.png";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className="w-64  bg-white dark:bg-zinc-800/90 border dark:border-zinc-800 absolute min-h-screen px-2 py-8">
      <h2 className="inline-flex items-center space-x-2">
        <img
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
          className="h-8 w-auto"
        />
        <span className="text-zinc-900 dark:text-zinc-100 font-bold text-2xl">Taildrop</span>
      </h2>
      <ul className="mt-8">
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
      </ul>
    </div>
  );
}
