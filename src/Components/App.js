import React, { useState } from "react"
import Categories from "./Categories"
import ItemsTable from "./ItemsTable"


let initialCategories = [
  { selected: false, text: "First Category", id: 1 },
  { selected: false, text: "Second Category", id: 2 },
  { selected: false, text: "Third Category", id: 3 },
  { selected: false, text: "Fourth Category", id: 4 },
  { selected: false, text: "No category", id: 5 },
];

let initialItems = [
  { name: "Item1", description: "First Category" },
  { name: "Item2", description: "Second Category" },
  { name: "Item3", description: "Third Category" },
  { name: "Item4", description: "Fourth Category" },
  { name: "Item5", description: "Fifth Category" },
  { name: "Item6", description: "First Category" },
  { name: "Item7", description: "Second Category" },
  { name: "Item8", description: "Third Category" },
  { name: "Item9", description: "Fourth Category" },
  { name: "Item10", description: "Fifth Category" },
  { name: "Item11", description: "Second Category" },
  { name: "Item12", description: "Third Category" },
  { name: "Item14", description: "Fourth Category" },
  { name: "Item15", description: "Fifth Category" },
];

//наполняем содержимым по-колхозному
function populateItems(list) {
  let populatedListOfItems = [...list];
  let id = 0;
  let salePrice = 200;
  let purchasePrice = 100;
  populatedListOfItems.forEach((item) => {
    item.id = id;
    item.salePrice = salePrice;
    item.purchasePrice = purchasePrice;

    id += 1;
    salePrice += 200;
    purchasePrice += 400;
  });
  return populatedListOfItems;
}

let populatedListOfItems = populateItems(initialItems);

function App() {
  function removeCategory(id) {
    setCategories(categories.filter((category) => category.id != id));
  }

  function onCategorySelect(description="Fourth Category", text) {
    console.log(description, text)
    setCategories(categories.filter((category) => category.text === category.description
    ))
  }

  let [categories, setCategories] = useState(initialCategories);

  return (
    <div className="box">
      <Categories
        categories={categories}
        removeCategory={removeCategory}
        onCategorySelect={onCategorySelect}
      ></Categories>
      <ItemsTable listOfItems={populatedListOfItems}></ItemsTable>
      </div>
  );
}

export default App
