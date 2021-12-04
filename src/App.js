import React, { useState } from "react";
import "./styles.css";

var title = "Calculator";
var color = "#ffb6c1";

export default function App() {
  const [a, seta] = useState("");
  const [b, setb] = useState("");
  const [plus, setPlus] = useState(0);

  function inputOne(event) {
    seta(event.target.value);
  }
  function inputTwo(event) {
    setb(event.target.value);
  }

  function add() {
    setPlus(Number(a) + Number(b));
  }
  function subtract() {
    setPlus(Number(a) - Number(b));
  }
  function product() {
    setPlus(Number(a) * Number(b));
  }
  function devide() {
    setPlus(Number(a) / Number(b));
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{title}</h1>
      <h1>
        This is design by <span style={{ color: color }}>Aquil</span>
      </h1>
      <input type="number" onChange={inputOne} value={a}></input>
      <input type="number" onChange={inputTwo} value={b}></input>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={product}>*</button>
      <button onClick={devide}>/</button>

      <h1>{plus}</h1>
    </div>
  );
}
