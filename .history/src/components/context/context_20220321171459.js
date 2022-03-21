import React, {createContext, useCallback} from 'react'

const myContext = createContext();

export const AppContext  = ({children}) =>{
  return <myContext.Provider>{children}</myContext.Provider>
  
}
