import React from "react";
import { ThemeContextType } from "../@types/theme";
import { useTheme } from "../contexts/ThemeContext";
import classNames from "../utils/classNames";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { CodeBracketIcon } from "@heroicons/react/20/solid";

type Props = {};
export const colors = ["green", "red", "blue", "yellow", "pink", "indigo"];

export default function Navbar({}: Props) {
  const { activeColor, setActiveColor } = useTheme() as ThemeContextType;

  const onChangeTheme = (color: string) => {
    setActiveColor(color);
  };

  const onToggleDarkMode = () => {
    document.body.classList.toggle("dark");
  };

  const onButtonClick = () => {
    onToggleDarkMode();
  };

  return (
    <div className={`pl-64 w-full p-4 bg-transparent flex  justify-between`}>
      <div className="container mx-auto  px-2 lg:px-8 flex justify-between ">
        <div className="inline-flex bg-white dark:bg-zinc-800  shadow px-2 py-1 rounded-lg">
          <button type="button" className="px-2 py-1 bg-gray-100 dark:bg-zinc-600 rounded-lg">
            <SunIcon className="h-6 w-6 text-amber-500" />
          </button>
          <button
            onClick={onButtonClick}
            type="button"
            className="px-2 py-1 opacity-40"
          >
            <MoonIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        <button
          type="button"
          className="flex items-center px-6 py-2  rounded-lg text-white bg-indigo-600 hover:bg-indigo-700"
        >
          HTML
          <CodeBracketIcon className="h-5 w-5 text-white ml-2" />
        </button>
      </div>
    </div>
  );
}
