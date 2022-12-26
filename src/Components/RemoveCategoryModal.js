import React from "react";
import "../RemoveCategoryModal.css";

function RemoveCategoryModal({ submitRemoveCategory, id, message, hideModal }) {
  return (
    <div className="modal-background" onClick={() => hideModal()}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="title">
          <div className="title-close-btn">
            <button onClick={() => hideModal()}>X</button>
          </div>
          <h1>{message}</h1>
          <p>Do you want to remove the category?</p>
        </div>
        <button onClick={hideModal} id="cancelBtn">
          Cancel
        </button>
        <button onClick={() => submitRemoveCategory(id)}>Confirm</button>
      </div>
    </div>
  );
}

export default RemoveCategoryModal;
