import { ComputerDesktopIcon, DevicePhoneMobileIcon, DeviceTabletIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ThemeProvider from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gray-100 dark:bg-zinc-900 dark:text-zinc-50 text-zinc-900">
        <Sidebar />
        <Navbar />

        <div className="pl-64 min-h-screen ">
          <div className="px-2 lg:px-8 w-full">
            <aside className="flex justify-between items-center rounded-t-lg  bg-white dark:bg-zinc-700">
              <ul className=" py-4 px-2 w-full flex space-x-2 pl-4  ">
                <li className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <li className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <li className="w-1.5 h-1.5 rounded-full bg-green-500" />
              </ul>

              <div className="flex space-x-1 py-2">
                <button type="button" className="px-2 py-2 bg-indigo-100 dark:bg-zinc-800 rounded">
                  <ComputerDesktopIcon className="h-5 w-5 text-indigo-500" />
                </button>
                <button type="button" className="px-1 py-1 ">
                  <DeviceTabletIcon className="h-5 w-5 text-gray-500" />
                </button>
                <button type="button" className="px-1 py-1 ">
                  <DevicePhoneMobileIcon className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </aside>

            <main className="min-h-screen  border dark:border-zinc-700 overflow-y-auto">selam</main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
