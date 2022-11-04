import React from "react";

type Props = {};

export default function MacButtonsGroup({}: Props) {
  return (
    <ul className=" py-4 px-2 w-full flex space-x-2 pl-4  ">
      <li className="w-1.5 h-1.5 rounded-full bg-red-500" />
      <li className="w-1.5 h-1.5 rounded-full bg-amber-500" />
      <li className="w-1.5 h-1.5 rounded-full bg-green-500" />
    </ul>
  );
}
