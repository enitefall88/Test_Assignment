import React, {useState} from "react"
import DisplayCertainCategory from "./DisplayCertainCategory"

let listOfCategories = [
  {selected: false, text: "First"},
  {selected: false, text: "Second"},
  {selected: false, text: "Third"},
  {selected: false, text: "Fourth"},
  {selected: false, text: "No category"}
]

//тут надо как-то через пропсы передать
function App() {
  return <div className="p-3">
    {listOfCategories.map((selected, text) => {
      return <div>
      <DisplayCertainCategory text={text}></DisplayCertainCategory>
      </div>
    })}

  </div>
}

export default App
