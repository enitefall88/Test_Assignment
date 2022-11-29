import React, { useState } from "react"
import Categories from "./Categories"
import ItemsTable from "./ItemsTable"


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
  { name: "Item5", categoryId: 3},
  { name: "Item6", categoryId: 0 },
  { name: "Item7", categoryId: 1 },
  { name: "Item8", categoryId: 2},
  { name: "Item9", categoryId: 2 },
  { name: "Item10", categoryId: 3 },
  { name: "Item11", categoryId: 4 },
  { name: "Item12", categoryId: 1 },
  { name: "Item14", categoryId: 5 },
  { name: "Item15", categoryId: 2 },
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
let selectedCategory = null

function App() {
  function removeCategory(id) {
    setCategories(categories.filter((category) => category.id != id))
    console.log("clicked remove")
  }

  function setActiveCategory(categoryId) {
    //todo
    setCategories(categories.map((category) => {
          //вот тут
          if(category.id === categoryId) {
            console.log(category.id, categoryId)
            category.selected = !category.selected
            selectedCategory = category.id
          }
          return category // вот этого не хватает
        }
    ))

  }

  let [categories, setCategories] = useState(initialCategories)


  //let [items, setItems] = useState(populatedListOfItems)

  return (
    <div className="box">
      <Categories
        categories={categories}
        removeCategory={removeCategory}
        onCategorySelect={setActiveCategory}
      ></Categories>
      <ItemsTable listOfItems={populatedListOfItems.filter(item =>
          item.categoryId === selectedCategory
      )}></ItemsTable>
      </div>
  );
}



export default App
