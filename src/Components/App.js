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
  { name: "Item1", description: "First" },
  { name: "Item2", description: "Second" },
  { name: "Item3", description: "Third" },
  { name: "Item4", description: "Fourth" },
  { name: "Item5", description: "Fifth" },
  { name: "Item6", description: "First" },
  { name: "Item7", description: "Second" },
  { name: "Item8", description: "Third" },
  { name: "Item9", description: "Fourth" },
  { name: "Item10", description: "Fifth" },
  { name: "Item11", description: "Second" },
  { name: "Item12", description: "Third" },
  { name: "Item14", description: "Fourth" },
  { name: "Item15", description: "Fifth" },
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

  function displaySelectedCategory(description) {
    console.log("displaySelectedCategory")
    setCategories(categories.filter((category) => category.description == description
    ))
  }

  let [categories, setCategories] = useState(initialCategories);

  return (
    <div className="box">
      <Categories
        categories={categories}
        removeCategory={removeCategory}
        displaySelectedCategory={displaySelectedCategory}
      ></Categories>
      <ItemsTable listOfItems={populatedListOfItems}></ItemsTable>
      </div>
  );
}

export default App