import React, {createContext, useCallback, useState} from 'react'
import axios from "axios"
const myContext = createContext();

export const AppContext  = ({children}) =>{
  const [meals,setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [random, setRandom] = useState([]);

  const fetchHomePageMeals = useCallback((searchTerm)=>{
    axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`).then(response =>{
      console.log()
    })
  },[])
  return <myContext.Provider>{children}</myContext.Provider>
  
}
