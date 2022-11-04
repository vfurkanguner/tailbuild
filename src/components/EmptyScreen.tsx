import React from "react";
import EmptyImg from "../assets/astro.png";

type Props = {};

export default function EmptyScreen({}: Props) {
  return (
    <div className="w-full from-slate-900 to-indigo-900 bg-gradient-to-t  text-white py-32 px-16 flex flex-col text-center gap-4 items-center justify-center">
      <h1 className="text-3xl font-semibold leading-snug">
        This is your drop zone
        <br />
        Start dragging components from the left sidebar
      </h1>
      <p className=" text-slate-100 font-light">
        Start by adding components to your page from the left sidebar.
      </p>
      <img
        src={EmptyImg}
        alt="Image by catalyststuff"
        className="w-full h-96 rounded-lg object-contain hover:animate-bounce"
      />
    </div>
  );
}

{
  /* <div className="w-full bg-slate-900 text-white py-32 px-16 flex flex-col text-center gap-4 items-center justify-center">
      <img
        src={EmptyImg}
        alt="Image by catalyststuff"
        className="w-full h-96 rounded-lg object-contain hover:animate-bounce"
      />
      <h1 className="text-3xl font-semibold leading-snug">
        Speed up your
        <br />
        Tailwind development process.
      </h1>
      <p className=" text-slate-100 font-light">
        Start by adding components to your page from the left sidebar.
      </p>
    </div> */
}
