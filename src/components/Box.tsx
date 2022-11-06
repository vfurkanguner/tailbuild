import { useDrag } from "react-dnd";

export interface BoxProps {
  name: string;
  children: React.ReactNode;
  onDragEnd: () => void;
}

interface DropResult {
  name: string;
  children: React.ReactNode;
}

export function Box({ name, children, onDragEnd }: BoxProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "box",
    item: { name },
    options: {
      dropEffect: "move",
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (item && dropResult) {
        onDragEnd();
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} style={{ opacity }} data-testid={`box`}>
      {children}
    </div>
  );
}

export default Box;
