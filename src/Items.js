import React from "react"

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

function Item({ item }) {
   return (
    <div>
      <li>{item.name}</li>
    </div>
  );
}

export default Items
