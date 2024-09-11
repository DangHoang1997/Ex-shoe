import React, { Component } from 'react'
import SanPham from './SanPham'

export default class ListShoe extends Component {
  render() {
    let {shoeArr , handleAddtoCart} = this.props
    return (
      <div className='row col-6'>
        {shoeArr.map((item,index)=>{
            return  <SanPham shoe= {item} key={index} handleAddtoCart = {handleAddtoCart}/>
        })}
      </div>
        
      
    )
  }
}
