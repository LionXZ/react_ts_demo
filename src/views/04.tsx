import React, { useRef, useState, useContext, useReducer } from "react";
import GlobalContext from "../GlobalContext";
interface State {
  count: number;
}
interface Action {
  type: string;
}

const reducer: any = (prevState: State, action: Action) => {
  let newState: State = {
    ...prevState,
  };
  switch (action.type) {
    case "minus":
      newState.count--;
      return newState;
    case "add":
      newState.count++;
      return newState;
    default:
      return prevState;
  }
};

const initData: State = {
  count: 1,
};
export default function Four() {
  // const myRef: any = useRef();
  const [state, dispatch]: any = useReducer(reducer, initData);
  const context: any = useContext(GlobalContext);
  return (
    <div>
      {/* <input type="text" ref={myRef} /> */}
      <button
        onClick={() => {
          dispatch({
            type: "minus",
          });
          context.dispatch({
            type: "minus",
          });
        }}
      >
        -
      </button>
      <div>
        {state.count}==={context?.state?.name}
      </div>
      <button
        onClick={() => {
          dispatch({
            type: "add",
          });
          context.dispatch({
            type: "add",
          });
        }}
      >
        +
      </button>
    </div>
  );
}
