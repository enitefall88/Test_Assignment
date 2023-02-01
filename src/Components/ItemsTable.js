import React from "react";
import "../styles.css";
function ItemsTable({ listOfItems, showEditItemModalOpen }) {
  return (
    <table className="box">
      <tbody className="table-body">
        <tr>
          <th className="table-entries-titles column">Id</th>
          <th className="table-entries-titles column">Name</th>
          <th className="table-entries-titles column">Purchase Price</th>
          <th className="table-entries-titles column">Sale Price</th>
        </tr>
        {listOfItems.map((value, key) => {
          return (
            <tr key={key}>
              <td style={{ padding: "4px" }}>{value.id}</td>
              <td style={{ padding: "4px" }}>{value.name}</td>
              <td style={{ padding: "4px" }}>{value.purchasePrice}</td>
              <td style={{ padding: "4px" }}>{value.salePrice}</td>
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
