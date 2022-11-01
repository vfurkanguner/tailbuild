import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ThemeProvider from "./contexts/ThemeContext";
import classNames from './utils/classNames';

function App() {
  const [view, setView] = useState("desktop"); // desktop, tablet, mobile

  return (
    <ThemeProvider>
      <div className="bg-gray-100 dark:bg-zinc-900 transition-all dark:text-zinc-50 text-zinc-900 min-h-screen pb-16">
        <div className="md:hidden h-screen">
          To work with this app, you need to wider your screen.
        </div>
        <div className="hidden md:flex flex-col">
          <Sidebar />
          <Navbar />

          <div className="pl-64">
            <div className={`px-2 lg:px-8 ${view} mx-auto w-full min-h-screen`}>
              <aside className="flex justify-between items-center rounded-t-lg  bg-white dark:bg-zinc-700">
                <ul className=" py-4 px-2 w-full flex space-x-2 pl-4  ">
                  <li className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <li className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <li className="w-1.5 h-1.5 rounded-full bg-green-500" />
                </ul>

                <div className="flex space-x-1 py-2 mr-4">
                  <button
                    type="button"
                    onClick={() => setView("desktop")}
                    className={
                      classNames(
                        "px-2 py-2 rounded hover:cursor-pointer",
                        view === "desktop" ? "bg-indigo-100 text-indigo-500 dark:bg-zinc-800": "text-gray-500"
                      )
                    }
                  >
                    <ComputerDesktopIcon className="h-5 w-5 " />
                  </button>
                  <button
                    type="button"
                    className={
                      classNames(
                        "px-2 py-2 rounded hover:cursor-pointer",
                        view === "tablet" ? "bg-indigo-100 text-indigo-500 dark:bg-zinc-800": "text-gray-500"
                      )
                    }
                    onClick={() => setView("tablet")}
                  >
                    <DeviceTabletIcon className="h-5 w-5 text-gray-500" />
                  </button>
                  <button
                    type="button"
                    className={
                      classNames(
                        "px-2 py-2 rounded hover:cursor-pointer",
                        view === "mobile" ? "bg-indigo-100 text-indigo-500 dark:bg-zinc-800": "text-gray-500"
                      )
                    }
                    onClick={() => setView("mobile")}
                  >
                    <DevicePhoneMobileIcon className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </aside>

              <main className="min-h-screen  border dark:border-zinc-700 overflow-y-auto">
                selam
              </main>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
