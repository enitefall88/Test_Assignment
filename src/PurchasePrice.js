import React from "react";

function PurchasePrice({ listOfItems }) {
  return (
    <div>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {listOfItems.map((price) => (
          <li key={price.id}>{price.purchasePrice}</li>
        ))}
      </ul>
    </div>
  );
}

export default PurchasePrice;
