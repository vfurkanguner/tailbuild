import React from "react";
import { ThemeContextType } from "../@types/theme";
import { useTheme } from "../contexts/ThemeContext";
import classNames from "../utils/classNames";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { CodeBracketIcon } from "@heroicons/react/20/solid";

type Props = {};
export const colors = ["green", "red", "blue", "yellow", "pink", "indigo"];

export default function Navbar({}: Props) {
  const { activeTheme, toggleTheme } = useTheme() as ThemeContextType;

  const onToggleDarkMode = () => {
    toggleTheme();
    document.body.classList.toggle("dark");
  };

  const onButtonClick = () => {
    onToggleDarkMode();
  };

  return (
    <div className={`pl-64 w-full p-4 bg-transparent flex  justify-between`}>
      <div className="container mx-auto  px-2 lg:px-8 flex justify-between ">
        <div className="inline-flex bg-white dark:bg-zinc-800  shadow px-2 py-1 rounded-lg">
          <button
            type="button"
            onClick={onButtonClick}
            className={
              activeTheme === "light"
                ? "px-2 py-1 bg-gray-100 dark:bg-zinc-600 rounded-lg transition-all"
                : "px-2 py-1"
            }
          >
            <SunIcon
              className={
                activeTheme === "light"
                  ? "h-6 w-6 text-amber-500"
                  : "text-gray-500 h-6 w-6"
              }
            />
          </button>

          <button
            onClick={onButtonClick}
            type="button"
            className={classNames(
              activeTheme === "dark"
                ? "px-2 py-1 bg-gray-100 dark:bg-zinc-600 rounded-lg transition-all"
                : "px-2 py-1"
            )}
          >
            <MoonIcon
              className={
                activeTheme === "dark"
                  ? "h-6 w-6 text-blue-100"
                  : "text-gray-500 h-6 w-6"
              }
            />
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
