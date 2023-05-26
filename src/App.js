import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0)

  const Increment = () => {
    setCounter(currentVal => currentVal + 1)
  }

  const Decrement = () => {
    if (counter === 0) return
    setCounter(currentVal => currentVal -1)
  }

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}

export default App;
