import React from "react";
import getPlaceholders from "../placeholders";
import getSections from "../sections";

type Props = {
  list: string[];
  setList: (list: string[]) => void;
};

type SectionType = {
  name: string;
  component: React.FC;
  key: string;
};

const iconList = getPlaceholders();
const blockListArr = [];

Object.entries(iconList).forEach(([type, icons]) => {
  Object.keys(icons).map((name) => blockListArr.push(`${name},${type}`));
});

export default function Sidebar({ setList, list }: Props) {
  const onDragEnd = (block) => {
    setList(() => {
      const isComponentInList = list.includes(block);
      if (isComponentInList) {
        return list;
      } else {
        return [block, ...list];
      }
    });
    //TODO: handleScrollToLastElement();
  };

  return (
    <div className="w-64  bg-white dark:bg-zinc-800/90 border dark:border-zinc-800 fixed  overflow-y-auto h-full px-2 py-8">
      <h2 className="inline-flex items-center space-x-2">
        <img
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
          className="h-8 w-auto"
        />
        <span className="text-zinc-900 dark:text-zinc-100 font-bold text-2xl">
          Taildrop
        </span>
      </h2>

      {/*content */}
      <ul className="mt-8">
        {Object.entries(iconList).map(([type, icons]) => (
          <div className="blocks" key={type}>
            <div className="block-category uppercase text-sm font-medium">
              {type}
            </div>
            <div className="block-list">
              {Object.entries(icons).map((icon) => {
                const blockName = icon[0];
                const block = getSections()[type][blockName];
                const newBlock = {
                  ...block,
                  name: blockName,
                };
                return (
                  <button
                    draggable
                    onDragEnd={() => onDragEnd(newBlock)}
                    className="w-full h-10"
                    key={icon[0]}
                    block-type={type}
                    block-name={blockName}
                  >
                    {/* {icon[1]} */}
                    {icon[0]}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
