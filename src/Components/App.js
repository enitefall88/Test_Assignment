import React, { useState } from "react";

import Categories from "./Categories";
import ItemsTable from "./ItemsTable";
import RemoveCategoryModal from "./RemoveCategoryModal";
import Header from "./Header";
import AddItemModal from "./AddItemModal";
import AddCategoryModal from "./AddCategoryModal";
import EditItemModal from "./EditItemModal";

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
  let [isAddCategoryModalOpen, setAddCategoryModalOpen] = useState(false);
  let [isEditItemModalOpen, setEditItemModalOpen] = useState(false);
  let [
    currentItemIdForEditAndDeleteModal,
    setCurrentItemIdForEditAndDeleteModal,
  ] = useState("");
  let [itemForEditingAndDeleting, setPassItemForEditingAndDeleting] = useState(
    {}
  );
  let [isDeleteItemModalOpen, setDeleteItemModalOpen] = useState(false);

  function showDeleteItemModal() {
    setDeleteItemModalOpen(true);
  }

  function hideDeleteItemModal() {
    setDeleteItemModalOpen(false);
  }

  function submitRemoveItem() {
    console.log(itemForEditingAndDeleting.id);
    setItems(items.filter((item) => itemForEditingAndDeleting.id !== item.id));
    hideDeleteItemModal();
  }
  function showEditItemModal() {
    setEditItemModalOpen(true);
  }

  function hideEditItemModal() {
    setEditItemModalOpen(false);
  }
  function submitRemoveCategory(id) {
    setCategories(categories.filter((category) => category.id !== id));
    hideCategoryDeleteModal();
    setId(null);
  }
  function addCategory(category) {
    let updatedCategories = [...categories, category];
    setCategories(updatedCategories);
    console.log(categories);
  }
  function showAddCategoryModalOpen() {
    setAddCategoryModalOpen(true);
  }

  function hideAddCategoryModalOpen() {
    setAddCategoryModalOpen(false);
  }

  function submitRemoveCategoryWithMovingItemsToNoCategory(id) {
    let updatedArray = items.map((item) => {
      return {
        ...item,
        categoryId: item.categoryId === id ? 0 : item.categoryId,
      };
    });
    console.log(updatedArray);
    setItems(updatedArray);
    submitRemoveCategory(id);
  }

  function showCategoryDeleteModal(id) {
    setDeleteCategoryModalOpen(true);
    setId(id);
  }

  function hideCategoryDeleteModal() {
    setDeleteCategoryModalOpen(false);
  }
  function showAddItemModal() {
    setAddItemModalOpen(true);
  }

  function hideAddItemModal() {
    setAddItemModalOpen(false);
  }

  function addItem(item) {
    console.log(item);
    setItems([...items, item]);
    hideAddItemModal();
  }
  //todo
  function editItem(editedItem, id) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, ...editedItem };
        }
        //returns all other items
        return item;
      })
    );
    hideEditItemModal();
  }

  function setActiveCategory(categoryId) {
    setCategories(
      categories.map((category) => {
        if (category.id === categoryId) {
          selectedCategory = category.id;
        }

        return category;
      })
    );
  }

  /*  function setCurrentItemId(id) {
    setCurrentItemIdForEditModal(id);
  }*/
  //todo
  function findAndSetCurrentItemForEditing(value) {
    setCurrentItemIdForEditAndDeleteModal(value.id);
    setPassItemForEditingAndDeleting(value);
  }

  return (
    <div>
      {!isAddItemModalOpen &&
        !isAddCategoryModalOpen &&
        !isDeleteCategoryModalOpen &&
        !isEditItemModalOpen &&
        !isDeleteItemModalOpen && (
          <Header
            showAddItemModal={showAddItemModal}
            showAddCategoryModalOpen={showAddCategoryModalOpen}
          />
        )}

      <div className="box">
        {isAddItemModalOpen && (
          <AddItemModal
            hideAddModal={hideAddItemModal}
            showAddItemModal={showAddItemModal}
            addItem={addItem}
            categories={categories}
          />
        )}
        {isAddCategoryModalOpen && (
          <AddCategoryModal
            addCategory={addCategory}
            hideAddCategory={hideAddCategoryModalOpen}
            showAddCategory={showAddCategoryModalOpen}
            categories={categories}
          />
        )}
        {isDeleteCategoryModalOpen && (
          <RemoveCategoryModal
            showRemoveModal={showCategoryDeleteModal}
            submitRemoveEntry={submitRemoveCategoryWithMovingItemsToNoCategory}
            hideModal={hideCategoryDeleteModal}
            id={id}
            message={"Do you want to remove the category?"}
          />
        )}
        <Categories
          showModal={showCategoryDeleteModal}
          categories={categories}
          removeCategory={submitRemoveCategoryWithMovingItemsToNoCategory}
          onCategorySelect={setActiveCategory}
        ></Categories>
        {isEditItemModalOpen && (
          <EditItemModal
            categories={categories}
            showEditItemModal={showEditItemModal}
            hideEditItemModal={hideEditItemModal}
            editItem={editItem}
            currentItemIdForEditModal={currentItemIdForEditAndDeleteModal}
            itemForEditing={itemForEditingAndDeleting}
          />
        )}
        {isDeleteItemModalOpen && (
          <RemoveCategoryModal
            hideModal={hideDeleteItemModal}
            submitRemoveEntry={submitRemoveItem}
            id={currentItemIdForEditAndDeleteModal}
            //todo item should be passed in
            message={"Do you want to delete item ?"}
          />
        )}
        )
        <ItemsTable
          showEditItemModalOpen={showEditItemModal}
          hideEditItemModal={hideEditItemModal}
          showDeleteItemModal={showDeleteItemModal}
          findAndSetCurrentItemForEditing={findAndSetCurrentItemForEditing}
          listOfItems={items.filter(
            (item) => item.categoryId === selectedCategory
          )}
        ></ItemsTable>
      </div>
    </div>
  );
}

export default App;
