import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

export default function HeroD({}: Props) {
  return (
    <div className="text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 p-4 space-y-4">
      <div className="px-8">
        <div className="px-4 border rounded-full flex items-center w-full">
          <div className="grid grid-cols-4 py-2 w-full">
            <div className="col-span-4 sm:col-span-2 border-r">
              <label htmlFor="location" className="sr-only">
                Location
              </label>
              <input
                className="w-full py-2 px-4 bg-transparent rounded-md  dark:placeholder-slate-100 placeholder-slate-500 focus:outline-none "
                placeholder="Location"
                type="text"
                name="location"
                id="location"
              />
            </div>
            <div className="border-r hidden sm:flex">
              <label htmlFor="date" className="sr-only">
                Dates
              </label>
              <input
                className="w-full py-2 px-4 bg-transparent  dark:placeholder-slate-100 placeholder-slate-500 focus:outline-none "
                placeholder="Add date"
                type="text"
                name="date"
                id="date"
              />
            </div>
            <div className="hidden sm:flex">
              <label htmlFor="guests" className="sr-only">
                Guests
              </label>
              <input
                className="w-full py-2 px-4 bg-transparent  dark:placeholder-slate-100 placeholder-slate-500 focus:outline-none "
                placeholder="Guests"
                type="text"
                name="guests"
                id="guests"
              />
            </div>
          </div>

          <button
            type="submit"
            className="ml-4 bg-blue-600 p-2 rounded-md text-white"
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <aside className="h-96 rounded-lg relative flex justify-center items-center  w-full bg-cover   bg-[url('https://img.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg?w=1380&t=st=1667383761~exp=1667384361~hmac=954bcf805ed3567df8f50ac9b9f653ebeedeaac3c91c73b53f5e3e8dd1757500')]">
        <div className="w-full relative z-50 p-4 space-y-4 justify-center items-center flex mt-8 flex-col">
          <h1 className="text-4xl text-center font-bold leading-tight text-white">
            Find your perfect stay
          </h1>

          <div className="md:space-x-4 space-y-2 md:space-y-0">
            <button className="bg-blue-600 text-white transition-all w-full  md:w-auto py-3 px-8 rounded-md text-lg">
              I'm feeling lucky
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
