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
    value = type == "checkbox" ? checked : value;
    console.log(event);

    let inputErrors = await schema
      .validateAt(name, { [name]: value }, { abortEarly: false })
      .then((_) => ({ [name]: "" }))
      .catch(convert);
    //todo
    //вот тут не так, не то же поле перезаписывается, а новое создается "": 'dfdfd'
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    setErrors({ ...errors, ...inputErrors });
    console.log(inputs);
  }

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
            <div>
              <label>Name</label> ({errors.name || "*"})<br />
              <input
                onChange={onChange}
                className="input-field"
                label="inputName"
                value={inputs.name}
                type="text"
              />
            </div>
            <div>
              <label>Purchase Price</label> ({errors.purchasePrice || "*"})
              <br />
              <input
                onChange={onChange}
                className="input-field"
                value={inputs.purchasePrice}
                label="inputPurchasePrice"
                type="number"
              />
            </div>
            <div>
              <label>Sell Price</label> ({errors.salePrice || "*"})<br />
              <input
                onChange={onChange}
                className="input-field"
                value={inputs.salePrice}
                label="inputSalePrice"
                type="number"
              />
            </div>
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

let schema = Y.object().shape({
  name: Y.string()
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
