
import React, {useState} from "react"






function Categories({categories, removeCategory}) {


  return <div>
   <ul style={{listStyleType: "none", paddingLeft: 0}}>
     {categories.map(category =>
        <CategoryItem category={category} removeCategory={removeCategory}/>
      )
     }
   </ul>
  </div>
}
function CategoryItem({category, removeCategory}) {
  return <div>
    <li>
      {console.log(category)}
      {category.text}
       <button type="button" onClick={_ => removeCategory(category.id)}
                  className="btn btn-secondary ml-2"
                  style={{lineHeight: 1, padding: "0.125rem .25rem"}}>
            &times;
          </button>
    </li>
  </div>
}

export default Categories
