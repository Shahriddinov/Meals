import React, {createContext} from 'react'

const myContext = createContext();

const context = () => {
  return (
    <div>
      <h1>Hello Context</h1>
    </div>
  )
}

export default context
