import React, { Component } from "react";
import { Table } from "reactstrap";
export default class ProductList extends Component {
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Open For Sales</th>
              <th>Serial No</th>
            </tr>
          </thead>
          <tbody>
          {
              this.props.products.map(product=>
                <tr key ={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.id}</td>
                </tr>
                )
          }
          </tbody>
        </Table>
      </div>
    );
  }
}
