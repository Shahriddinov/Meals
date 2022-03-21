import React, {useEffect, useContext} from 'react'
import "./Categories.scss"
import {myContext} from "../context/context"
function Categories() {
  const {fetchCategories, categories} = useContext(myContext);


  useEffect(() =>{
    fetchCategories();
  }, [fetchCategories]);
  return (
    <div className="categories">
      {categories.map()}
    </div>
  )
}

export default Categories
