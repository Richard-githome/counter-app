import React from "react";
import "./styles/App.css";
import Buttons from "./components/button";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <div className="app-body">
        <div className="title">
          <h3>Current Value</h3>
        </div>
        <div className="result">
          <h1>{count}</h1>
        </div>
        <Buttons count={count} setCount={setCount} />
      </div>
    </>
  );
}

export default App;
