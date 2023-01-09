import React from "react";
function Header({ showAddItemModal, showAddCategoryModalOpen }) {
  return (
    <div className="header">
      <div>
        <button onClick={() => showAddItemModal()}>Add an item</button>
      </div>
      <div>
        <button onClick={() => showAddCategoryModalOpen()}>
          Add a category
        </button>
      </div>
    </div>
  );
}

export default Header;
