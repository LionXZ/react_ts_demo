import React, { useState, useReducer, useContext } from "react";
import "./App.css";
import GlobalContext, { reducer, initData } from "./GlobalContext";
// import One from "./views/01";
// import TWO from "./views/02";
import A from "./views/04.tsx";

function App() {
  // const [count, setCount] = useState(0);
  // const [bool, setBool] = useState(true);
  const [state, dispatch]: any = useReducer(reducer, initData);
  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div className="App">
        {/* {bool && <One name="One" />} */}
        {/* <One>
        <div>222</div>
      </One>
      <TWO />
      <TWO name="TWO" count={count} /> */}
        <A />
        {/* <button onClick={() => setBool(!bool)}>setBool</button> */}
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
