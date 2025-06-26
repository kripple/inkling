import { observer } from 'mobx-react';
import { Store } from './store';
import { useSocket } from './SocketProvider';

const Button = observer(() => {
  const error = Store.getError();
  const socket = useSocket();
  const initialPosition = {
    x: 16,
    y: 16,
  } as const;
  const buttonStyles =
    'rounded-sm border-2 px-4 py-2 cursor-pointer disabled:cursor-auto transition-colors font-mono font-bold text-base antialiased flex-grow translate-y-0 drop-shadow active:drop-shadow-none active:translate-y-0.5' as const;
  const buttonClasses = (custom: string) => [custom, buttonStyles].join(' ');

  const createNewRectangle = () => {
    socket.emit('rectangle:add', initialPosition);
  };

  const reset = () => {
    socket.emit('rectangle:reset');
  };

  return (
    <>
      <button
        disabled={Boolean(error)}
        type="button"
        onClick={createNewRectangle}
        className={buttonClasses(
          'text-gray-900 bg-white border-gray-300 hover:bg-gray-100',
        )}
      >
        Add Rectangle
      </button>
      {error ? (
        <button
          type="button"
          onClick={reset}
          className={buttonClasses(
            'text-white bg-red-800 border-red-900 hover:bg-red-900',
          )}
        >
          Clear All Rectangles
        </button>
      ) : null}
    </>
  );
});

export { Button };
