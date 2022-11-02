import React from "react";
import classNames from "../utils/classNames";
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
} from "@heroicons/react/20/solid";

type Props = {
  view: string;
  setView: (view: "desktop" | "tablet" | "mobile") => void;
};

export default function DeviceView({ setView, view }: Props) {
  return (
    <div className="flex space-x-1 py-2 mr-4">
      <button
        type="button"
        onClick={() => setView("desktop")}
        className={classNames(
          "px-2 py-2 rounded hover:cursor-pointer",
          view === "desktop"
            ? "bg-indigo-100 text-indigo-500 dark:bg-zinc-800"
            : "text-gray-500"
        )}
      >
        <ComputerDesktopIcon className="h-5 w-5 " />
      </button>
      <button
        type="button"
        className={classNames(
          "px-2 py-2 rounded hover:cursor-pointer",
          view === "tablet"
            ? "bg-indigo-100 text-indigo-500 dark:bg-zinc-800"
            : "text-gray-500"
        )}
        onClick={() => setView("tablet")}
      >
        <DeviceTabletIcon className="h-5 w-5 text-gray-500" />
      </button>
      <button
        type="button"
        className={classNames(
          "px-2 py-2 rounded hover:cursor-pointer",
          view === "mobile"
            ? "bg-indigo-100 text-indigo-500 dark:bg-zinc-800"
            : "text-gray-500"
        )}
        onClick={() => setView("mobile")}
      >
        <DevicePhoneMobileIcon className="h-5 w-5 text-gray-500" />
      </button>
    </div>
  );
}
