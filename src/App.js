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
  return <li>
    {element.text}
  </li>
})


function App() {
  return <div>
      <DisplayCertainCategory text={listOfCategories}></DisplayCertainCategory>
      </div>
}

export default App
