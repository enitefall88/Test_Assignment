import React from "react"

function ItemsTable({ listOfItems }) {
  return (
    <table className="box">
      <tbody className="table-body">
        <tr>
           <th className="column">Id</th>
          <th className="column">Name</th>
          <th className="column">Purchase Price</th>
          <th className="column">Sale Price</th>
        </tr>
        {listOfItems.map((value, key) => {
          return (
              <tr key={key}>
              <td>{value.id}</td>
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

export default ItemsTable
