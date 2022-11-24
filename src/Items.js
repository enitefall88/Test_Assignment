import React from "react"


function Items({ listOfItems }) {
  // Items нужно поместить справа от категорий, флексбокс?

  //таблицу переделал, но неуверен по структуре
 return  <div>
      <table>

          <tr>
            <th>Name</th>
            <th>Purchase Price</th>
            <th>Sale Price</th>
          </tr>
        {listOfItems.map((value, key) => {
          return <tr key={key}>
            <td>{value.name}</td>
            <td>{value.purchasePrice}</td>
            <td>{value.salePrice}</td>
          </tr>
        })}

      </table>
    </div>
 }

export default Items
