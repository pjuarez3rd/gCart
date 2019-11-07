import React, { Component } from 'react';

class Item extends Component {
  constructor(props){ 
    super(); 
  }
  itemList = []; 
    
  itemsArray =()=>{ 
   return this.itemList; 
  }
  addItem =(item)=> { 
    this.itemList.push(item); 
  }

  render() {
    const item = this.props.item;

    return (
      <div>
        <li>{item.name}</li>
          <li>${item.price.toFixed(2)} {item.onSale ? '(SALE!)' : ''}</li>
          <li>
            <a href="#" className="deleteItem" onClick={this.props.onDelete}>Delete</a>
          </li>
      </div>  
    )
  }
}

export default Item;