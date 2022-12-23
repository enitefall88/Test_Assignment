import React, { useState } from "react";
import "../AddItemModal.css";
function AddItemModal({ showAddItemModal, hideAddModal, addItem }) {
  let [name, setName] = useState("");
  let [purchasePrice, setPurchasePrice] = useState(null);
  let [salePrice, setSalePrice] = useState(null);
  let [value, setValue] = useState(1)

  let item = {};
  function createItem(name, categoryId, salePrice, purchasePrice) {
    item = {
      name: name,
      categoryId: +value,
      salePrice: +salePrice,
      purchasePrice: +purchasePrice,
    };
  }

   let initialCategories = [
  { text: "First Category", id: 1 },
  { text: "Second Category", id: 2 },
  { text: "Third Category", id: 3 },
  { text: "Fourth Category", id: 4 },
  { text: "No category", id: 0 }
];

  let handleCategoryChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value);
  };

  function SelectCategory({onChange}) {
    return (
    <label>
      Select Category
      <select  onChange={onChange} value={value}>

        {initialCategories.map((category, index) => (
          <option key={index} value={category.id}>{category.text}</option>
        ))}
      </select>
    </label>
  );
}


  return (
    <div className="modal-background" onClick={() => showAddItemModal()}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="title">
          <div className="title-close-btn">
            <button onClick={() => hideAddModal()}>X</button>
          </div>
          <h1>Add an item</h1>
          <form action="" className="input">
            <div>
              <SelectCategory onChange={handleCategoryChange}
               />
            </div>

            <input
              onChange={(event) => {
                setName(event.target.value);
              }}
              className="input-field"
              label="inputName"
              type="text"
            />
            <input
              onChange={(event) => {
                setPurchasePrice(event.target.value);
              }}
              className="input-field"
              label="inputPurchasePrice"
              type="number"
            />
            <input
              onChange={(event) => {
                setSalePrice(event.target.value);
              }}
              className="input-field"
              label="inputSalePrice"
              type="number"
            />
          </form>
        </div>
        <button
          className="save-btn"
          onClick={() => {
            createItem(name, value, purchasePrice, salePrice);
            addItem(item);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddItemModal;
