import React, { useState } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const sayHello = () => {
    console.log("Hello! Have a nice day!");
    setMessage("Hello! Have a nice day!");
  };

  const handleIncrementClick = () => {
    increment();
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
    setMessage('');
  };

  const sayWelcome = (msg) => {
    setMessage(msg);
  };

  const handleSyntheticEvent = (e) => {
    setMessage("I was clicked");
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>React Event Handling Examples</h1>

      <h2>Counter: {count}</h2>
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome to the Event App!")}>
        Say Welcome
      </button>

      <br /><br />

      <button onClick={handleSyntheticEvent}>Click Me (Synthetic Event)</button>

      <br /><br />
      {message && <p>{message}</p>}

      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;

