import { Stage, Layer, Rect } from 'react-konva';
import { useSocket } from './SocketProvider';
import { Rectangle } from './store';

// TODO: apply throttling / rate limiting to the button action

export function App() {
  const headerHeight = 64 as const;
  const socket = useSocket();
  const initialPosition = {
    x: 16,
    y: 16,
  } as const;

  const createNewRectangle = () => {
    socket.emit('rectangle:add', initialPosition);
  };

  const handleDragMove = () => {
    console.log('move detected!');
  };

  return (
    <>
      <header
        style={{ height: `${headerHeight}px` }}
        className="shadow p-1 flex"
      >
        <button
          type="button"
          onClick={createNewRectangle}
          className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Add Rectangle
        </button>
      </header>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight - headerHeight}
        className="m-4"
      >
        <Layer>
          <Rect
            onDragMove={handleDragMove}
            x={16}
            y={16}
            width={24}
            height={24}
            fill="red"
            shadowBlur={2}
            draggable
          />
        </Layer>
      </Stage>
    </>
  );
}
