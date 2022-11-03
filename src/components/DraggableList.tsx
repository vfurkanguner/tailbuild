import React, { ForwardedRef } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import classNames from "../utils/classNames";

type Props = {
  list: any[];
  setList: (list: any[]) => void;
};

const DraggableList = React.forwardRef(
  ({ list, setList }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const onDragEnd = (result: any) => {
      const { destination, source } = result;
      if (!result.destination) {
        return;
      }

      const items = Array.from(list);
      const [reorderedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, reorderedItem);

      setList(items);
    };

    const onDelete = (index: number) => {
      const items = Array.from(list);
      items.splice(index, 1);
      setList(items);
    };

    return (
      <div className="w-full h-screen">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="list">
            {(provided) => (
              <div
                className="hover:cursor-grab  bg-white dark:bg-slate-900"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {list?.map((component, index) => {
                  return (
                    <Draggable
                      index={index}
                      draggableId={component.id}
                      key={component.id}
                    >
                      {(provided, snapshot: any) => (
                        <div className="">
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="relative group">
                              <div
                                ref={ref}
                                className={classNames(
                                  snapshot.isDragging
                                    ? "opacity-50   border-2 border-green-600"
                                    : "opacity-100 ",
                                  "hover:border-4 border-green-600"
                                )}
                              >
                                {component}
                              </div>
                              <button
                                className={classNames(
                                  "hidden group-hover:flex items-center justify-center w-10 h-10",
                                  " bg-red-600 rounded-full absolute z-50 top-4 right-5",
                                  "  text-white cursor-pointer"
                                )}
                                onClick={() => onDelete(index)}
                              >
                                <TrashIcon className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
);

export default DraggableList;
