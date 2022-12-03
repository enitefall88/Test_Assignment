import React from "react";

function Modal({ active, setActive }) {
  active ? (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >{console.log("sdsd")}
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  ) : null;
}

export default Modal;
