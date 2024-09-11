import React, { Component } from 'react'

export default class Cart extends Component {
    renderTable = () => {
        let { cartItem, handleChangeTotal } = this.props;
        return cartItem.map((item, index) => {
            const totalPrice = item.price * item.Total; // Tính tổng giá tiền
            return (
                <tr className='text-center' key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td><img width={50} src={item.image} alt="" /></td>
                    <td>{item.price}</td>
                    <td>
                        <button onClick={() => handleChangeTotal(item.id, 1)} className='btn btn-success'>+</button>
                        {item.Total}
                        <button onClick={() => handleChangeTotal(item.id, -1)} className='btn btn-danger'>-</button>
                    </td>
                    <td>
                        <button onClick={() => this.props.handleDeleItem(item.id)}>Dele </button>
                    </td>
                    <td><h3 className='btn btn-danger'>{totalPrice}</h3></td> {/* Hiển thị tổng giá tiền */}
                </tr>
            )
        });
    }
    
  render() {
    
    return (
      <div className='col-6'>
        <h3>Cart</h3>
        <table className='table'>
            <thead className='text-center'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Img</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
               {this.renderTable()}
            </tbody>
            
                
        </table>
        {this.props.cartItem.length === 0 && (<h3 className='text-center'>Cart is empty</h3>)}
      </div>
    )
  }
}
