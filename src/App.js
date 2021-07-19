import './App.css';
import React, { useState } from 'react';
let val = 0;
function App() {
    const [count, setCount] = useState(val);
    return (
    <div className="App">
      <header className="App-header">
            <button onClick={()=> {
                val++;
                setCount(val);
            }} >+</button>
          {count}
          <button onClick={()=> {
              val--;
              setCount(val);
          }} >-</button>
      </header>
    </div>
  );
}
export default App;