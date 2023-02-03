import React from "react";
import "../RemoveCategoryModal.css";

function RemoveCategoryModal({ submitRemoveEntry, id, message, hideModal }) {
  return (
    <div className="modal-background" onClick={() => hideModal()}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="title">
          <div className="title-close-btn">
            <button onClick={() => hideModal()}>X</button>
          </div>
          <h1> </h1>
          <p>{message}</p>
        </div>
        <button onClick={hideModal} id="cancelBtn">
          Cancel
        </button>
        <button onClick={() => submitRemoveEntry(id)}>Confirm</button>
      </div>
    </div>
  );
}

export default RemoveCategoryModal;
