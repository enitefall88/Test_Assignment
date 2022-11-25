import React from "react";

function ItemsTable({ listOfItems }) {
  // ItemsTable нужно поместить справа от категорий, флексбокс?

  //таблицу переделал, но неуверен по структуре
  return (

      <table className="box">
         <tbody>
        <tr>
          <th className="column">Name</th>
          <th className="column">Purchase Price</th>
          <th className="column">Sale Price</th>
        </tr>
        {listOfItems.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.name}</td>
              <td>{value.purchasePrice}</td>
              <td>{value.salePrice}</td>
            </tr>
          );
        })}
          </tbody>
      </table>

  );
}

export default ItemsTable;
