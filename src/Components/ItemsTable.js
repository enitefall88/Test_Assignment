import React from "react";
import "../styles.css";
function ItemsTable({ listOfItems, showEditItemModalOpen }) {
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
              <td>
                <button className="remove-button">Remove</button>
              </td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => showEditItemModalOpen()}
                >
                  Edit
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ItemsTable;
