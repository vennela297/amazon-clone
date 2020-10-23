import React,{createContext,useContext,useReducer} from "react";


// prepares the data Layer

export const StateContext =  createContext();

// wrap the entire app and it provides the datalayer to each component of the app
export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>

        {children}
    </StateContext.Provider>
);
// pull the information from the datalayer
export const useStateValue = () => useContext(StateContext);