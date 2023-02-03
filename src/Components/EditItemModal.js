import React, { useState } from "react";
import "../AddItemModal.css";
import * as Y from "yup";
import { convert } from "../Utils/validation.utils";
import SelectCategoryDropdown from "./SelectCategoryDropdownEdit";

function useItemValidation(item) {
  let [inputs, setInputs] = useState({
    inputName: item.inputName,
    purchasePrice: item.purchasePrice,
    salePrice: item.salePrice,
  });

  let [errors, setErrors] = useState({});

  return { inputs, errors, setInputs, setErrors };
}
//todo
function EditItemModal({
  showEditItemModal,
  hideEditItemModal,
  categories,
  editItem,
  itemForEditing,
  currentItemIdForEditModal,
}) {
  let [categoryId, setCategoryId] = useState(0);

  let { inputs, errors, setInputs, setErrors } = useItemValidation({
    inputName: itemForEditing.name,
    purchasePrice: itemForEditing.purchasePrice,
    salePrice: itemForEditing.salePrice,
  });

  async function onChange(event) {
    let {
      target: { type, name, value, checked },
    } = event;

    console.log(name);
    value = type == "checkbox" ? checked : value;

    let inputErrors = await schema
      .validateAt(name, { [name]: value }, { abortEarly: false })
      .then(() => ({ [name]: "" }))
      .catch(convert);

    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
      categoryId: categoryId,
    }));
    console.log(inputs);
    setErrors({ ...errors, ...inputErrors });
  }

  let item = {};
  function createItem(inputs) {
    item = {
      name: inputs.inputName,
      categoryId: +inputs.categoryId,
      salePrice: +inputs.salePrice,
      purchasePrice: +inputs.purchasePrice,
    };
    console.log("here", item);
  }
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
                categoryId={categoryId}
                setCategoryId={setCategoryId}
                categories={categories}
              />
            </div>
            <div>
              <label>Name</label>({errors.inputName || "*"}) <br />
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
              <label>Sell Price</label>({errors.salePrice || "*"}) <br />
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
              inputs
              /* inputs.inputName,
              categoryId,
              inputs.purchasePrice,
              inputs.salePrice*/
            );
            // need to pass an id from list of items as a second argument
            editItem(item, currentItemIdForEditModal);
            console.log(item, currentItemIdForEditModal);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

let schema = Y.object().shape({
  categoryId: Y.number().required().min(1).max(100),
  inputName: Y.string()
    .required()
    .min(3)
    .max(15)
    .matches(/^[-a-z0-9]*$/),
  purchasePrice: Y.number().required().min(0).max(10000),
  salePrice: Y.number().required().min(0).max(10000),
});

export default EditItemModal;
