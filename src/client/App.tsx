import { Stage, Layer } from 'react-konva';
import { useWindowSize } from 'usehooks-ts';
import { Canvas } from './Canvas';
import { Buttons } from './Buttons';

export function App() {
  const { width = 0, height = 0 } = useWindowSize();
  const headerHeight = 64 as const;

  return (
    <>
      <header
        style={{ height: `${headerHeight}px` }}
        className="shadow p-1 flex gap-1"
      >
        <Buttons />
      </header>
      <Stage width={width} height={height - headerHeight}>
        <Layer>
          <Canvas />
        </Layer>
      </Stage>
    </>
  );
}
