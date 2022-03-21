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
      {categories.map(category=>(
        <div kry={category.idCategory}>
          <img scr={category.strCategoryThumb} alt="#"/>
          <h4>{category.strCategory}</h4>
        </div>
      ))}
    </div>
  )
}

export default Categories
