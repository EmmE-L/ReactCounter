import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);

  return(
    <div className="page">
       <h1>Hello Word!</h1>
      <p className="count">CONUTER: {count}</p>
      <div className="centerbutton">
      <button className="button" onClick={() => setCount(count + 1)}>+</button>
      <button className="button" onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  )
}

export default App;
