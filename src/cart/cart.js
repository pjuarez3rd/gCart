import React, { Component } from 'react';
import api from '../api';
import InputComponent from '../input/inputComponent';
import Item from '../item/item';
import ItemModel from '../item/item.model';

class Cart extends Component {

  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;

    api.getTasks().then(tasksData => {
      if(this.mounted) {
        this.setState({
          items: tasksData == null ? [] : tasksData
        });
      }
    });
  }

  addItem = (item) => {
    console.log('item', item); 
    this.setState(prevState => ({
      items: [
        ...prevState.items,
        item
      ]
    }))
    // api.addItem(item);
  }

  deleteItem = (id)=> { 
    console.log('delete', id)
    this.setState(prevState =>({ 
      items: prevState.items.filter((item)=>id !== item.id )
    }))
    console.log(this.state.items)


  }

  render() {
    return (
      <div>
        <h1>cart Items</h1>
        <ul>
          <InputComponent addItem={this.addItem}/>
          {
            this.state.items.map((item, key) => {
              return <Item  key={key} item={item} onDelete={this.deleteItem} />
            })
          }
        </ul>
      </div>
    )
  }
}

export default Cart;