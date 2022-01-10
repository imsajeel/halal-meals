import React from "react";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <b>Halal Meals</b>
        <button>Get started</button>
        <footer>
          <p>App by: Sajeel Aalam</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
