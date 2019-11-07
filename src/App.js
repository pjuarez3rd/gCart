import React, { Component } from 'react';
// import logo from './logo.svg';
import Item from './item/item'
import './App.css';
import ItemModel from './item/item.model';
import Cart from './cart/cart';

class App extends Component {
  state = { 
        name:'Thing', 
        price:15, 
        onSale:false
  }
  render() {
    return ( 
      <Cart />
    );
  }
}

export default App;
