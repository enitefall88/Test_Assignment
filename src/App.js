import React, {useState} from "react"
import DisplayCertainCategory from "./DisplayCertainCategory"

let categories = [
  {selected: false, text: "First Category" , id: 1},
  {selected: false, text: "Second Category", id: 2},
  {selected: false, text: "Third Category", id: 3},
  {selected: false, text: "Fourth Category", id: 4},
  {selected: false, text: "No category", id: 5}
]

const listOfCategories = categories.map((element) => {
  return <li key={element.id}>
    {element.text}
         <button type="button" onClick={_ => removeCategory(listOfCategories.text)}
//у каждой категории кнопка удаление, непонятно через список делать и вообще
// прямо тут или в DisplayCertainCategory компоненте

                  className="btn btn-secondary ml-2"
                  style={{lineHeight: 1, padding: "0.125rem .25rem"}}>
       </button>
  </li>
})

function removeCategory(text) {
  return 0
}

function App() {
  //тут стейт сделаем для категорий
  //let [categories, setCategories] = useState(categories)
  return <div>
      <DisplayCertainCategory text={listOfCategories} removeCategory={removeCategory}></DisplayCertainCategory>
      </div>
}

export default App
