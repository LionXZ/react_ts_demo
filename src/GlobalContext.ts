import React from "react";
interface State {
  name: string,
}
interface Action {
  type: string,
}
export const reducer = (prevState: State, action: Action) => {
  let newState: State = {
    ...prevState,
  };
  switch (action.type) {
    case "minus":
      newState.name += 1;
      return newState;
    case "add":
      newState.name += 2;
      return newState;
    default:
      return prevState;
  }
};
export const initData: State = {
  name: "xiexiaoluo",
};


const GlobalContext: any = React.createContext({});
export default GlobalContext;