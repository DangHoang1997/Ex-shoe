import React, { Component } from 'react'

export default class SanPham extends Component {
  render() {
    let {shoe} = this.props
    return (
      <div className='col-4'>
        <img width={100} src={shoe.image} alt="" />
        <p>{shoe.name}</p>
        <button onClick={() => {
          {
            this.props.handleAddtoCart(shoe)}
        }
        } className='btn btn-danger'>Add</button>
      </div>
    )
  }
}
