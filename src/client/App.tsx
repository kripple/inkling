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
          className="text-gray-900 bg-white border-2 border-gray-300 hover:bg-gray-100 rounded-sm px-4 py-2 cursor-pointer disabled:cursor-auto transition-colors font-mono font-bold text-base antialiased flex-grow translate-y-0 drop-shadow active:drop-shadow-none active:translate-y-0.5"
        >
          Add Rectangle
        </button>
      </header>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight - headerHeight}
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
