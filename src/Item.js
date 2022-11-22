import React from "react";

function Item({ item }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>{item.name}</th>
            <th>{item.purchasePrice}</th>
            <th>{item.salePrice}</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Item;
