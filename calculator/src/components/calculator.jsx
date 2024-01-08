import React, { useState } from "react";

function Calculator() {
  const [state, setState] = useState("");
  const [output, setoutput] = useState("");
  const changeState = (value) => {
    setState((prev) => prev + value);
  };
  const ButtonClick = (value) => {
    changeState(value);
  };
  const HandleEqual = () => {
      setoutput(eval(state).toString());
      setState("");
  };
  const HandleClear = () => {
    setState("");
    setoutput("")
  };
  return (
    <>
      <h1>CALCULATOR</h1>
      <div className="calculator">
        <div className="output">
          <div >{output}</div>
          <div>{state}</div>
        </div>
        <button className="AC" onClick={HandleClear}> AC </button>
        <button className="C" onClick={() => setState(state.slice(0, -1))}> C </button>
        <button className="box div" onClick={() => changeState("/")}> ÷ </button>
        <button className="box" onClick={() => ButtonClick("7")}> 7 </button>
        <button className="box" onClick={() => ButtonClick("8")}> 8 </button>
        <button className="box" onClick={() => ButtonClick("9")}> 9 </button>
        <button className="box mult" onClick={() => changeState("*")}> x  </button>
        <button className="box" onClick={() => ButtonClick("4")}> 4 </button>
        <button className="box" onClick={() => ButtonClick("5")}> 5 </button>
        <button className="box" onClick={() => ButtonClick("6")}> 6 </button>
        <button className="box add" onClick={() => changeState("+")}> + </button>
        <button className="box" onClick={() => ButtonClick("1")}> 1 </button>
        <button className="box" onClick={() => ButtonClick("2")}> 2 </button>
        <button className="box" onClick={() => ButtonClick("3")}> 3 </button>
        <button className="box sub" onClick={() => changeState("-")}> - </button>
        <button className="box dot" onClick={() => ButtonClick(".")}> . </button>
        <button className="box zero" onClick={() => ButtonClick("0")}> 0</button>
        <button className="box equal" onClick={HandleEqual}> = </button>
      </div>
    </>
  );
}
export default Calculator;