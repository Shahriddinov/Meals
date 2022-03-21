import React, {createContext, useCallback, useState} from 'react'

const myContext = createContext();

export const AppContext  = ({children}) =>{
  const [meals,setMeals]
  return <myContext.Provider>{children}</myContext.Provider>
  
}
