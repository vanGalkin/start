import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Level Up</h1>
      </header>
      <main className="layout">
        <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
        {isToggled && (
          <div className="card">
            <h4>Post Number one</h4>
            <p>this is inside the card</p>
          </div>
        )}
      </main>
    </div>
  );
}
