import React from "react";
import "../Modal.module.css";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <div className="titleCloseBtn">
            <button onClick={() => closeModal(false)}>X</button>
          </div>
          <h1>Are you sure you want to continue</h1>
          <p>Blah blah</p>
        </div>
        <button onClick={() => closeModal(false)}>Cancel</button>
        <button>Confirm</button>
      </div>
    </div>
  );
}

export default Modal;
