import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "react-beautiful-dnd-iframe";

type Props = {
  list: any[];
  setList: (list: any[]) => void;
};

const DraggableList = React.forwardRef(({ list, setList }: Props, ref) => {
  const onDragEnd = (result: {
    destination: { index: number };
    source: { index: number };
  }) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(list);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setList(items);
  };

  return (
    <div className="w-full h-screen">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided, snapshot) => (
            <div
              className="hover:cursor-grab"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {list?.map((component, index) => {
                return (
                  <Draggable
                    index={index}
                    draggableId={component.name}
                    key={component.name}
                  >
                    {(provided, snapshot) => (
                      <div className="">
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="relative">
                            <div
                              // ref={markupRef}
                              onInput={(e) =>
                                console.log(e.currentTarget.textContent)
                              }
                            >
                              {component}
                            </div>
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
});

export default DraggableList;
