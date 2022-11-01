import React from "react";
import { ThemeContextType } from "../@types/theme";
import { useTheme } from "../contexts/ThemeContext";
import classNames from "../utils/classNames";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

type Props = {};
export const colors = ["green", "red", "blue", "yellow", "pink", "indigo"];

export default function Navbar({}: Props) {
  const { activeColor, setActiveColor } = useTheme() as ThemeContextType;

  const onChangeTheme = (color: string) => {
    setActiveColor(color);
  };

  return (
    <div className={`pl-64 w-full p-4 bg-transparent flex  justify-between`}>
      <div className="container mx-auto  px-2 lg:px-8 flex justify-between ">
        <div className="inline-flex bg-white shadow px-2 py-1 rounded-lg">
          <button type="button" className="px-2 py-1 bg-gray-100 rounded-lg">
            <SunIcon className="h-6 w-6 text-amber-500" />
          </button>
          <button type="button" className="px-2 py-1 opacity-40">
            <MoonIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        <button type="button" className="flex items-center px-6 py-2 border rounded-lg text-white bg-indigo-600 hover:bg-indigo-700">
            HTML
        </button>
      </div>
    </div>
  );
}
