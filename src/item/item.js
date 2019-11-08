import React, { Component } from 'react';

class Item extends Component {
  constructor(props){ 

    super(); 
    }
 
  handleDelete = (e, item) => {
    console.log('item event ', e, item)
    this.props.onDelete(this.props.item.id);
  }
  
  render() {
    const item = this.props.item;

    return (
      <div>
        <li>{item.name}</li>
          <li>${parseFloat(item.price).toFixed(2)} {item.onSale ? '(SALE!)' : ''}</li>
          <button onClick={e => this.handleDelete(e, item)}>Delete</button>
      </div>  
    )
  }
}

export default Item;