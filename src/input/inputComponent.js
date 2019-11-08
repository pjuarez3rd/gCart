import React, { Component } from 'react';

class InputComponent extends React.Component{ 
    constructor(props){ 
        super(props); 

        this.state = {
            name: '',
            price: 0,
            onSale: false
        }
      }
onChange = (e)=>{ 
    this.setState({ name: e.target.value })

}
onChangePrice = (e)=>{ 
    this.setState({ price: e.target.value })

}

onChangeSale = (e) => {
    this.setState({ onSale: e.target.checked})
}

handleSubmit(e) {
    e.preventDefault();
    if(this.state.name=== ''|| this.state.price=== 0){ 
        console.log('error ')
    }else{ 
     this.props.addItem({
         id: Math.floor(Math.random() * 999999),
        name: this.state.name,
        price: this.state.price,
        onSale: this.state.onSale
    }); 
} 
}

render(){ 
    return (
        <form onSubmit={e=> {this.handleSubmit(e)}}> 
            <label> 
                Input Item: 
                <input type="text" name= 'name' value = {this.state.name} onChange ={this.onChange} />
            </label>
            <label>
                Price:
                <input type="text" name="price" value = {this.state.price} onChange ={this.onChangePrice}/>
            </label>
            <label>
                On Sale:
                <input type="checkbox" name="onSale" checked={this.state.onSale} onChange={this.onChangeSale}/>
            </label>
            <button type="submit" name="Create"> Add Item</button>
        </form>
    ); 
}
}

export default InputComponent; 