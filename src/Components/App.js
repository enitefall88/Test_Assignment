import React, { useState } from "react";

import Categories from "./Categories";
import ItemsTable from "./ItemsTable";
import RemoveCategoryModal from "./RemoveCategoryModal";
import Header from "./Header";
import AddItemModal from "./AddItemModal";

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
  { name: "Item14", categoryId: 3 },
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
  let [isDeleteCategoryModalOpen, setDeleteCategoryModalOpen] = useState(false);
  let [id, setId] = useState(null);
  let [items, setItems] = useState(populatedListOfItems);
 let [isAddItemModalOpen, setAddItemModalOpen] = useState(false);
  function submitRemoveCategory(id) {
    setCategories(categories.filter((category) => category.id !== id));
    hideAddItemModal();
    setId(null);
    setItems(items);
  }


  function submitRemoveCategoryWithMovingItemsToNoCategory(id) {
    setItems(items.map(item => {
      return {
        ...item,
        categoryId: item.categoryId === id ? 0 : item.categoryId
      }
    }))
    submitRemoveCategory(id);
  }


  function showCategoryDeleteModal(id) {
    setDeleteCategoryModalOpen(true);
    setId(id);
  }

  function showAddItemModal() {
    setAddItemModalOpen(true)
    console.log("from AddItem")
  }

  function hideAddItemModal() {
    setAddItemModalOpen(false);
  }

  function addItem(name, category, purchasePrice, salePrice) {
    let item = {name: name, categoryId: +category,  salePrice: +salePrice,
      purchasePrice: +purchasePrice,
     }
    setItems([...items, item])
    hideAddItemModal()
    console.log(item)
    console.log(items)
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
    );
  }

  return (
    <div>
      {!isAddItemModalOpen  && // тут наверное как-то изящнее можно скрывать или по-другому скомпоновать
          <Header showAddItemModal={showAddItemModal}/>}
      <div className="box">
        {isAddItemModalOpen && (
            <AddItemModal
            hideAddModal={hideAddItemModal}
            showAddItemModal={showAddItemModal}
            addItem={addItem}

            />
        )}
        {isDeleteCategoryModalOpen && (
          <RemoveCategoryModal
            showModal={showCategoryDeleteModal}
            submitRemoveCategory={
              submitRemoveCategoryWithMovingItemsToNoCategory
            }
            hideModal={hideAddItemModal}
            id={id}
          />
        )}
        <Categories
          showModal={showCategoryDeleteModal}
          categories={categories}
          removeCategory={submitRemoveCategoryWithMovingItemsToNoCategory}
          onCategorySelect={setActiveCategory}
        ></Categories>
        <ItemsTable
          listOfItems={items.filter(
            (item) => item.categoryId === selectedCategory
          )}
        ></ItemsTable>
      </div>
    </div>
  );
}

export default App;
