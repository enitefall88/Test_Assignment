import React from "react";
import "../AddItemModal.css"
function AddItemModal({showAddItemModal, hideAddModal}) {
  return (
    <div className="modal-background" onClick={() => showAddItemModal()}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="title">
          <div className="title-close-btn">
            <button onClick={() => hideAddModal()}>X</button>
          </div>
          <h1>Add an item</h1>
          <form action="" className="input">
            <input  type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </form>
        </div>
        <button className="save-btn" onClick={() =>  null}>Save</button>
      </div>
    </div>
  );
}

export default AddItemModal;
