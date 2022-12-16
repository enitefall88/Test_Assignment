import React from "react";
import "../Modal.css";

function Modal({setModalOpen, submitRemoveCategory, id, message}) {
  return (
    <div className="modal-background" onClick={() => setModalOpen(false)}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div className="title">
          <div className="title-close-btn">
            <button onClick={() => setModalOpen(false)}>X</button>
          </div>
          <h1>{message}</h1>
          <p>Blah blah</p>
        </div>
        <button onClick={() => setModalOpen(false)} id="cancelBtn">Cancel</button>
        <button onClick={() => submitRemoveCategory(id)}>Confirm</button>
      </div>
    </div>
  );
}

export default Modal;
