import React, { Component } from 'react';
import api from '../api';
import InputComponent from '../input/inputComponent';
import Item from '../item/item';
import ItemModel from '../item/item.model';

class Cart extends Component {
  state = {
    items: []
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;

    api.getTasks().then(tasksData => {
      if(this.mounted) {
        this.setState({
          items: tasksData
        });
      }
    });
  }

  render() {
    return (
      <div>
        <h1>cart Items</h1>
        <ul>
          <InputComponent/>
          <Item item={new ItemModel('Test1', 3.50, false)}/>
        </ul>
      </div>
    )
  }
}

export default Cart;