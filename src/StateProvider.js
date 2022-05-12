// Using CreatecontextAPI
import React, { createContext, useContext, useReducer } from "react";
//Preparing the data layer
export const StateContext = createContext();
//Wrapping our components, provide the provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// using it inside a component
export const useStateValue = () => useContext(StateContext);
