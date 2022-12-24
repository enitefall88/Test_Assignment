import React, { useState } from "react";
import "../AddItemModal.css";
import SelectCategoryDropdown from "./SelectCategoryDropdown";
function AddItemModal({ showAddItemModal, hideAddModal, addItem, categories }) {
  let [name, setName] = useState("");
  let [purchasePrice, setPurchasePrice] = useState(null);
  let [salePrice, setSalePrice] = useState(null);
  let [categoryId, setCategoryId] = useState(1);

  let item = {};
  function createItem(name, categoryId, salePrice, purchasePrice) {
    item = {
      name: name,
      categoryId: +categoryId,
      salePrice: +salePrice,
      purchasePrice: +purchasePrice,
    };
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
              <SelectCategoryDropdown
                categoryId={categoryId}
                setCategoryId={setCategoryId}
                categories={categories}
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
            createItem(name, categoryId, purchasePrice, salePrice);
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
