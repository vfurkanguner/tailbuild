import React from "react";
import { ThemeContextType } from "../@types/theme";
import { useTheme } from "../contexts/ThemeContext";
import classNames from "../utils/classNames";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { CodeBracketIcon } from "@heroicons/react/20/solid";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

type Props = {
  onCloseDarkMode: () => void;
  onOpenDarkMode: () => void;
  openModal: () => void;
  markup: string;
  downLoadHtml: () => void;
};

export default function Navbar({
  markup,
  onOpenDarkMode,
  onCloseDarkMode,
  openModal,
  downLoadHtml,
}: Props) {
  const activeTheme = localStorage.getItem("theme") ?? "light";
  const openDarkMode = () => {
    localStorage.setItem("theme", "dark");
    onOpenDarkMode();
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  };
  const closeDarkMode = () => {
    localStorage.setItem("theme", "light");
    onCloseDarkMode();
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  };

  const onBtnClick = () => {
    downLoadHtml();
  };

  return (
    <div className={`pl-64 w-full p-4 bg-transparent flex  justify-between`}>
      <div className="container mx-auto  px-2 lg:px-8 flex justify-between ">
        <div className="inline-flex bg-white dark:bg-zinc-800  shadow px-2 py-1 rounded-lg">
          <button
            type="button"
            onClick={closeDarkMode}
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
            onClick={openDarkMode}
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
        <div className="inline-flex gap-4">
          <button className="px-6 inline-flex bg-zinc-800 dark:bg-zinc-900 hover:bg-black text-white items-center py-3 rounded-lg">
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              className="w-5 h-5"
            >
              <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z" />
            </svg>

            <span>
              <a href="https://github.com/vfurkanguner/tailbuild" target="_blank" className="ml-2">
                Github
              </a>
            </span>
          </button>
          <button
            disabled={markup.length === 0}
            onClick={openModal}
            type="button"
            className="flex disabled:opacity-20 items-center px-6 py-3 text-white  rounded-lg bg-blue-600 hover:bg-blue-70"
          >
            Code
            <CodeBracketIcon className="h-5 w-5 ml-2" />
          </button>
          <button
            disabled={markup.length === 0}
            onClick={onBtnClick}
            type="button"
            className="flex disabled:opacity-20 items-center px-6 py-3  rounded-lg text-white  bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 "
          >
            Download file
            <ArrowDownCircleIcon className="h-5 w-5 text-white ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
