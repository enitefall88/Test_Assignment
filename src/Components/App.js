import React, { useState } from "react";
import Categories from "./Categories";
import ItemsTable from "./ItemsTable";

//selected пока не нужно
let initialCategories = [
  { selected: false, text: "First Category", id: 1 },
  { selected: false, text: "Second Category", id: 2 },
  { selected: false, text: "Third Category", id: 3 },
  { selected: false, text: "Fourth Category", id: 4 },
  { selected: false, text: "No category", id: 0 },
];

let initialItems = [
  { name: "Item1", categoryId: 1 },
  { name: "Item2", categoryId: 2 },
  { name: "Item3", categoryId: 3 },
  { name: "Item4", categoryId: 4 },
  { name: "Item5", categoryId: 3 },
  { name: "Item6", categoryId: 0 },
  { name: "Item7", categoryId: 1 },
  { name: "Item8", categoryId: 2 },
  { name: "Item9", categoryId: 2 },
  { name: "Item10", categoryId: 3 },
  { name: "Item11", categoryId: 4 },
  { name: "Item12", categoryId: 1 },
  { name: "Item14", categoryId: 5 },
  { name: "Item15", categoryId: 2 },
];


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
let selectedCategory = null;

function App() {
  let [categories, setCategories] = useState(initialCategories);

  function removeCategory(id,e) {
    setCategories(categories.filter(category =>
     category.id != id
    ))
//here
    e.stopPropagation()

    console.log("From removeCategories clicked remove",e);
  }



  function setActiveCategory(categoryId) {
    setCategories(
      categories.map((category) => {
        if (category.id === categoryId) {
          console.log("from setCategories");
          selectedCategory = category.id;
        }
        return category;
      })
    )
  }


  return (
    <div className="box">
      <Categories
        categories={categories}
        removeCategory={removeCategory}
        onCategorySelect={setActiveCategory}
      ></Categories>
      <ItemsTable
        listOfItems={populatedListOfItems.filter(
          (item) => item.categoryId === selectedCategory
        )}
      ></ItemsTable>
    </div>
  )
}

export default App
