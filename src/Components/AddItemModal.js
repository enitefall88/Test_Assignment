import React from "react";

function AddItemModal() {
  return (
    <div className="modal-background" onClick={() => setModalOpen(false)}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="title">
          <div className="title-close-btn">
            <button onClick={() => hideModal()}>X</button>
          </div>
          <h1>Add an item</h1>
          <form action="">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddItemModal;
