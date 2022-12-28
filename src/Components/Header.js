import React from "react";
function Header({showAddItemModal}) {
  return (
      <div className="header">
        <div>
          <button onClick={() => showAddItemModal()}>
            Add an item
          </button>
        </div>
          <div>
          <button>
            Add a category
          </button>
        </div>
      </div>
  )
}

export default Header
