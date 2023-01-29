// 1] create  2] provide  3] use

import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const AppContext = createContext();


const init ={
    signupData:[],
    loginData:{},
}

export const AppContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, init)

    return (
        <AppContext.AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.AppContext.Provider>
    )
}



