//create
//provide
//use

import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const AppContext = createContext();

const init = {
  signupdata: [],
  logindata: {},
};
export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init);
  console.log(state);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
