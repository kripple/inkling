import { Rect } from 'react-konva';
import { observer } from 'mobx-react';
import { Store } from './store';
import { useSocket } from './SocketProvider';
import type { KonvaEventObject } from 'konva/lib/Node';
import randomColor from 'randomcolor';

const Rectangle = observer(({ rectId }: { rectId: string }) => {
  const socket = useSocket();
  const { id, x, y, socketId } = Store.get(rectId);

  const handleDragMove = (event: KonvaEventObject<DragEvent>) => {
    const rect = event.target;
    const { x, y } = rect.position();
    const id = rect.getAttr('rectId');
    const socketId = rect.getAttr('socketId');
    socket.emit('rectangle:move', { x, y, id, socketId });
  };

  const color = randomColor({ seed: socketId });

  return (
    <Rect
      key={id}
      onDragMove={handleDragMove}
      x={x}
      y={y}
      width={24}
      height={24}
      fill={color}
      shadowBlur={2}
      draggable
      rectId={id}
      socketId={socketId}
    />
  );
});

export { Rectangle };
