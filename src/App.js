import React, { useState } from "react";
import "./styles.css";

var title = "Calculator";
var color = "#ffb6c1";

export default function App() {
  const [a, seta] = useState(0);
  const [b, setb] = useState(0);
  const [plus, setPlus] = useState(0);

  const inputOne = (event) => seta(event.target.value);
  const inputTwo = (event) => setb(event.target.value);
  console.log(seta);
  console.log(setb);
  function add(seta, setb) {
    let c = seta + setb;
    console.log(c);
    setPlus(c);

    console.log(seta);
    console.log(setb);
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
      <h1>{plus}</h1>
      <p>{seta}</p>
      <p>{setb}</p>
    </div>
  );
}
