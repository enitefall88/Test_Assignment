import React from "react";
import "../RemoveCategoryModal.css";

function RemoveCategoryModal({
  submitRemoveCategoryWithMovingItemsToNoCategory,
  id,
  message,
  hideCategoryDeleteModal,
}) {
  return (
    <div className="modal-background" onClick={() => hideCategoryDeleteModal()}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="title">
          <div className="title-close-btn">
            <button onClick={() => hideCategoryDeleteModal()}>X</button>
          </div>
          <h1>{message}</h1>
          <p>Do you want to remove the category?</p>
        </div>
        <button onClick={() => hideCategoryDeleteModal()} id="cancelBtn">
          Cancel
        </button>
        <button
          onClick={() => submitRemoveCategoryWithMovingItemsToNoCategory(id)}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default RemoveCategoryModal;
