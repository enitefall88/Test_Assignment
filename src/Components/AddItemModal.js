import React, { useState } from "react";
import "../AddItemModal.css";
import SelectCategoryDropdown from "./SelectCategoryDropdown";
import * as Y from "yup";

function useItemValidation(item) {
  let [inputs, setInputs] = useState({
    inputName: item.inputName,
    purchasePrice: item.purchasePrice,
    salePrice: item.salePrice,
  });

  let [errors, setErrors] = useState({});
  let [busy, setBusy] = useState(false);
  return { inputs, errors, busy, setInputs, setErrors, setBusy };
}
function AddItemModal({ showAddItemModal, hideAddModal, addItem, categories }) {
  let { inputs, errors, busy, setInputs, setErrors, setBusy } =
    useItemValidation({
      inputName: "",
      purchasePrice: 0,
      salePrice: 0,
    });

  async function onChange(event) {
    let {
      target: { type, name, value, checked },
    } = event;
    console.log(name);
    value = type == "checkbox" ? checked : value;
    //todo
    let inputErrors = await schema
      .validateAt(name, { [name]: value }, { abortEarly: false })
      .then((_) => ({ [name]: "" }))
      .catch(convert);

    setInputs((inputs) => ({ ...inputs, [name]: value }));
    setErrors({ ...errors, ...inputErrors });
  }

  let [categoryId, setCategoryId] = useState(1);

  let item = {};
  function createItem(name, categoryId, salePrice, purchasePrice) {
    item = {
      name: name,
      categoryId: +categoryId,
      salePrice: +salePrice,
      purchasePrice: +purchasePrice,
    };
    console.log(item);
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
            <div>
              <label>Name</label> ({errors.inputName || "*"})<br />
              <input
                name="inputName"
                onChange={onChange}
                className="input-field"
                value={inputs.inputName}
                type="text"
              />
            </div>
            <div>
              <label>Purchase Price</label> ({errors.purchasePrice || "*"})
              <br />
              <input
                name="purchasePrice"
                onChange={onChange}
                className="input-field"
                value={inputs.purchasePrice}
                type="number"
              />
            </div>
            <div>
              <label>Sell Price</label> ({errors.salePrice || "*"})<br />
              <input
                name="salePrice"
                onChange={onChange}
                className="input-field"
                value={inputs.salePrice}
                type="number"
              />
            </div>
          </form>
        </div>
        <button
          className="save-btn"
          onClick={() => {
            createItem(
              inputs.inputName,
              categoryId,
              inputs.purchasePrice,
              inputs.salePrice
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

let schema = Y.object().shape({
  inputName: Y.string()
    .required()
    .min(3)
    .max(15)
    .matches(/^[-a-z0-9]*$/),
  purchasePrice: Y.number().required().min(0).max(10000),
  salePrice: Y.number().required().min(0).max(10000),
});
let convert = (errors) => {
  return errors.inner.reduce((z, item) => {
    let name = (item.path || "").includes(".")
      ? item.path.split(".")[0]
      : item.path || "";
    return z[item.path || ""] ? z : { ...z, [name]: item.message };
  }, {});
};

/*function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}*/
export default AddItemModal;
