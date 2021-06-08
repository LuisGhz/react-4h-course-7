import { useRef, useState } from 'react';
import Component from 'components/Component';
function App() {
  const [show, setShow] = useState(true);

  const inputRef = useRef();
  return (
    <div className="App">
      <input ref={ inputRef } type="text" />
      <input type="text" />
      <input type="text" />
      <button onClick={() => {
        inputRef.current.focus();
      }} >Focus</button>
      <p></p>
      <button onClick={ () => setShow(!show) }>Show/hide</button>
      {
        show && <Component />
      }
    </div>
  );
}

export default App;
