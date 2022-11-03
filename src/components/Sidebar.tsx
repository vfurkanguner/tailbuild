import React from "react";
import getPlaceholders from "../placeholders";
import getSections from "../sections";
import StyledAccordion from "./StyledAccordion";

type Props = {
  list: object[];
  setList: (list: any) => void;
  handleScrollToLastElement: () => void;
};

const iconList = getPlaceholders();

const blockListArr = [];

Object.entries(iconList).forEach(([type, icons]) => {
  Object.keys(icons).map((name) => blockListArr.push(`${name},${type}`));
});

type Block = {
  name: string;
  id: string;
};

export default function Sidebar({
  setList,
  list,
  handleScrollToLastElement,
}: Props) {
  const onDragEnd = (block: Block) => {
    setList([...list, block]);
    handleScrollToLastElement();
  };

  return (
    <div className="w-64  bg-white dark:bg-zinc-800/90 border dark:border-zinc-800 fixed  overflow-y-auto h-full px-2 py-8">
      <h2 className="inline-flex items-center space-x-2">
        <img src="/public/vite.svg" alt="Taildrop" className="h-8 w-auto" />
        <span className="text-zinc-900 dark:text-zinc-100 font-bold text-2xl">
          Taildrop
        </span>
      </h2>

      {/*content */}
      <ul className="mt-8 space-y-2">
        {Object.entries(iconList).map(([type, icons]) => (
          <div className="" key={type}>
            <StyledAccordion title={type}>
              <div className="space-y-6 mt-4">
                {Object.entries(icons).map((icon) => {
                  const blockName = icon[0];
                  const block: object = getSections()[type as keyof {}][blockName];

                  const newBlock = {
                    name: blockName,
                    id: `${new Date().getTime()}`,
                    ...block,
                  };
                  return (
                    <button
                      draggable
                      onDragEnd={() => onDragEnd(newBlock)}
                      className="w-full h-full bg-gray-200 dark:bg-slate-900 rounded-md px-2  py-2 hover:cursor-grab grayscale hover:grayscale-0"
                      key={icon[0]}
                      block-type={type}
                      block-name={blockName}
                    >
                      {/* {icon[1]} */}
                      {icon[1]}
                    </button>
                  );
                })}
              </div>
            </StyledAccordion>
          </div>
        ))}
      </ul>
    </div>
  );
}
