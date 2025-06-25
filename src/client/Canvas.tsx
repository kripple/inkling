import { observer } from 'mobx-react';
import { Store } from './store';
import { Rectangle } from './Rectangle';

const Canvas = observer(() => {
  const keys = Store.keys();
  return keys.map((id) => <Rectangle key={id} rectId={id} />);
});

export { Canvas };
