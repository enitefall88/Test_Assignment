import React, { useState } from "react";
import "../AddItemModal.css";
import SelectCategoryDropdown from "./SelectCategoryDropdown";

export default function EditItemModal({
  showEditItemModal,
  hideEditItemModal,
  categories,
}) {
  return (
    <div className="modal-background" onClick={() => showEditItemModal()}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="title">
          <div className="title-close-btn">
            <button onClick={() => hideEditItemModal()}>X</button>
          </div>
          <h1>Add an item</h1>
          <form action="" className="input">
            <div>
              <SelectCategoryDropdown
                /* categoryId={categoryId}
                setCategoryId={setCategoryId}*/
                categories={categories}
              />
            </div>
            <div>
              <label>Name</label> <br />
              <input
                name="inputName"
                //onChange={onChange}
                className="input-field"
                //value={inputs.inputName}
                type="text"
              />
            </div>
            <div>
              <label>Purchase Price</label>
              <br />
              <input
                name="purchasePrice"
                //   onChange={onChange}
                className="input-field"
                //value={inputs.purchasePrice}
                type="number"
              />
            </div>
            <div>
              <label>Sell Price</label> <br />
              <input
                name="salePrice"
                // onChange={onChange}
                className="input-field"
                // value={inputs.salePrice}
                type="number"
              />
            </div>
          </form>
        </div>
        <button
          className="save-btn"
          onClick={() => {
            createItem(
              inputs
              /* inputs.inputName,
              categoryId,
              inputs.purchasePrice,
              inputs.salePrice*/
            );
            addItem(item);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
