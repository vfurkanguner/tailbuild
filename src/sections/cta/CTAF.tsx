import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import WomanPhoto from "../../assets/bg.png";

type Props = {};

export default function CTAF({}: Props) {
  return (
    <div className="flex p-4 flex-col md:flex-row bg text-slate-900 dark:text-slate-100 items-center bg-white dark:bg-slate-900">
      <div className="w-full p-4 space-y-4">
        <div className="flex items-center gap-4 text-sm font-light text-slate-600">
          02
          <span className="w-16 h-px bg-black dark:bg-slate-500" />
          What is Taildrop?
        </div>
        <h1 className="md:text-5xl text-4xl font-semibold leading-tight">
          Start writing your
          <span className="text-blue-600"> first blog</span>
        </h1>
        <p className="text-slate-500 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 w-full  md:w-auto py-3 px-8 rounded-md text-lg text-slate-100">
            Join now
            <ArrowUpRightIcon className="w-4 h-4 ml-2" />
          </button>
          <button className=" border border-blue-600 hover:bg-blue-700 w-full  md:w-auto py-3 px-8 rounded-md text-lg text-blue-600">
            Learn more
          </button>
        </div>
      </div>

      <figure className="w-full">
        <img
          src={WomanPhoto}
          className="w-full h-96 object-contain rounded-lg"
          alt="hero"
        />
      </figure>
    </div>
  );
}
