import React from "react"
import Item from "./Item";

function Items({ listOfItems }) {
  // Items нужно поместить справа от категорий, флексбокс?
  return (
    <div>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {listOfItems.map((item) =>
          <Item item={item} key={item.id}/>
        )}
      </ul>
    </div>
  );
}

export default Items
