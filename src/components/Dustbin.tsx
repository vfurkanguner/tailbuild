import React from "react";
import { useDrop } from "react-dnd";
import classNames from "../utils/classNames";

type DustbinType = {
  children: React.ReactNode;
};
const Dustbin = ({ children }: DustbinType) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "box",
    drop: () => ({ name: "Dustbin" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;

  return (
    <div
      ref={drop}
      className={classNames(
        isActive ? "border-4 border-green-500" : "",
        "h-full"
      )}
    >
      {children}
    </div>
  );
};

export default Dustbin;
