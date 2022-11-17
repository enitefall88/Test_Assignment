import React, {useState} from "react"
import Categories from "./Categories"
import CategoryItem from "./Categories"

let initialCategories = [
  {selected: false, text: "First Category" , id: 1},
  {selected: false, text: "Second Category", id: 2},
  {selected: false, text: "Third Category", id: 3},
  {selected: false, text: "Fourth Category", id: 4},
  {selected: false, text: "No category", id: 5}
]





function App() {
  function removeCategory(text) {
  return 0
}
  //тут стейт сделаем для категорий, но почему-то cannot access before init.
  let [categories, setCategories] = useState(initialCategories)
  return <div>
      <Categories categories={categories} removeCategory={removeCategory}></Categories>
      </div>
}

export default App
