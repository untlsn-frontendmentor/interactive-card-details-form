import { createSignal } from 'solid-js';
import './style.css';

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <button type="button" class="increment" onClick={() => setCount((v) => v + 1)}>
      Clicks:
      {' '}
      {count()}
    </button>
  );
}
