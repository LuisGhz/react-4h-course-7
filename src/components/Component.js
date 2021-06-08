import { useState, useEffect, useRef } from 'react';
const Component = () => {
  const [count, setCount] = useState(0);
  const componentRef = useRef(true);

  useEffect(() => {
    return () => {
      componentRef.current = false;
    }
  });

  const fakeFetch = () => {
    setTimeout(() => {
      if (componentRef.current)  setCount(count + 1);
    }, 2000);
  }

  return (
    <div>
      <h1>Component counter: { count }</h1>
      <button onClick={ fakeFetch }>fake fetch</button>
    </div>
  )
}

export default Component;