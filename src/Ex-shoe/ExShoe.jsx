import React, { Component } from 'react'
import { DataShoe } from './Datashoe'
import Cart from './Cart'
import ListShoe from './ListShoe'

export default class ExShoe extends Component {
    state = {
        cart: [],
        listShoe: DataShoe,
    }

    handleAddtoCart = (shoe) => {
        let cloneCart = [...this.state.cart]; // Sửa thành mảng
        let index = cloneCart.findIndex(item => item.id === shoe.id);
        if (index !== -1) {
            cloneCart[index].Total++;
        } else {
            cloneCart.push({ ...shoe, Total: 1 });
        }
        this.setState({ cart: cloneCart });
    }

    handleDeleItem = (id) => {
        let newCart = this.state.cart.filter(item => item.id !== id);
        this.setState({ cart: newCart });
    }
    handleChangeTotal = (idshoe,opsition) => {
      let cloneCart = [...this.state.cart]
      let index = cloneCart.findIndex(item => item.id === idshoe)
      let shoe = cloneCart[index]
      shoe.Total = Math.max(shoe.Total+opsition,0);
      this.setState({cart :cloneCart})
    }
    

    render() {
        let { listShoe, cart } = this.state;
        return (
            <div className='row'>
                <ListShoe shoeArr={listShoe} handleAddtoCart={this.handleAddtoCart} />
                <Cart handleChangeTotal = {this.handleChangeTotal} handleDeleItem={this.handleDeleItem} cartItem={cart} />
            </div>
        );
    }
}
