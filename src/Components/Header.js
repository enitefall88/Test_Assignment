import React from "react";
import "../Header.css";
function Header({ showAddItemModal, showAddCategoryModalOpen }) {
  return (
    <div className="header">
      <div>
        <button className="button" onClick={() => showAddItemModal()}>
          Add an Item
        </button>
      </div>
      <div>
        <button className="button" onClick={() => showAddCategoryModalOpen()}>
          Add a Category
        </button>
      </div>
    </div>
  );
}

export default Header;
