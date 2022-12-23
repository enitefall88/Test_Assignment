import React, { useState } from "react";
import "../AddItemModal.css";
function AddItemModal({ showAddItemModal, hideAddModal, addItem, categories }) {
  let [name, setName] = useState("");
  let [category, setCategory] = useState(null);
  let [purchasePrice, setPurchasePrice] = useState(null);
  let [salePrice, setSalePrice] = useState(null);
  let [value, setValue] = useState(null)

  let item = {};
  function createItem(name, categoryId, salePrice, purchasePrice) {
    item = {
      name: name,
      categoryId: +category,
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

  function SelectCategory({onChange, value, categories}) {
      return (
    <label>
      Select Category
      <select  onChange={onChange} value={value}>

        {categories.map((category, index) => (
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
             // categories={categories}
              value={value}
              categories={initialCategories}
              />
            </div>
         {/*   <div>
              <label>
                Select a category
                <select onChange={(event) => setCategory(event.target.value)} >
                  {categories.map((category,index) => {
                    return <option onChange={(event) => setCategory(event.target.value)} key={index} value={category.text}>
                      {category.id}
                    </option>
                  })}
                </select>
              </label>
            </div>*/}
    {/*        <input
              onChange={(event) => {
                setCategory(event.target.value);
              }}
              className="input-field"
              label="selectCategory"
              type="number"
            />
*/}
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
            createItem(name, category, purchasePrice, salePrice);
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
