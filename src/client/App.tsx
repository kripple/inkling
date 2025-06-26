import { Stage, Layer } from 'react-konva';
import { Canvas } from './Canvas';
import { Button } from './Button';

export function App() {
  const headerHeight = 64 as const;

  return (
    <>
      <header
        style={{ height: `${headerHeight}px` }}
        className="shadow p-1 flex gap-1"
      >
        <Button />
      </header>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight - headerHeight}
      >
        <Layer>
          <Canvas />
        </Layer>
      </Stage>
    </>
  );
}
