import React, { ForwardedRef } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import classNames from "../utils/classNames";
import Dustbin from "./Dustbin";
import update from "immutability-helper";
import { ListItem as ListItemInterface } from "../App";
import Card from "./Card";
import EmptyScreen from "./EmptyScreen";

type Props = {
  list: any[];
  setList: (list: any[]) => void;
};

function DragLayer({ children }: { children: React.ReactNode }) {
  return <div>selam</div>;
}

const DraggableList = React.forwardRef(
  ({ list, setList }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const [isDragging, setIsDragging] = React.useState(false);

    const moveCard = React.useCallback(
      (dragIndex: number, hoverIndex: number) => {
        setList((prevCards: ListItemInterface[]) =>
          update(prevCards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, prevCards[dragIndex] as Item],
            ],
          })
        );
      },
      []
    );

    // remove from list using update
    const removeCard = React.useCallback((index: number) => {
      setList((prevCards: ListItemInterface[]) =>
        update(prevCards, {
          $splice: [[index, 1]],
        })
      );
    }, []);

    const renderCard = React.useCallback((component: any, index: number) => {
      return (
        <div className="relative group">
          <Card
            key={component.id}
            index={index}
            id={component.id}
            moveCard={moveCard}
          >
            {component}
          </Card>
          <button
            className={classNames(
              "hidden group-hover:flex items-center justify-center w-10 h-10",
              " bg-red-600 rounded-full absolute z-50 top-4 right-5",
              "  text-white cursor-pointer"
            )}
            onClick={() => removeCard(index)}
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      );
    }, []);

    return (
      <div className="h-screen">
        <Dustbin>
          {list.length === 0 ? <EmptyScreen /> : null}
          {list.length > 0
            ? list?.map((component, i) => renderCard(component, i))
            : null}
        </Dustbin>
      </div>
    );
  }
);

export default DraggableList;
