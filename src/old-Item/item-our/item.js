import React, { Component } from 'react';
import './Item.css'
class Item extends Component {
    state = {
        list: ['one', 'two', 'three']
    }

    onClick =(event)=>{ 
        console.log('click!! ')
       Array.from(document.getElementsByTagName('li')).map((element)=>{ 
        element.classList.add("apply-shake");
   
        setTimeout(() => {
            element.classList.remove("apply-shake")
            element.classList.add("Item-bullet")
        }, 1000);
        
         return element;
       })
       event.preventDefault();
    }
    onChange = (event) => {
        // capture text that has changed and put it somewhere
        this.setState({
            itemText: event.target.value
        });

        event.preventDefault();
    }

    onSubmit = (event) => {
        event.preventDefault();

        this.setState({
            list: this.state.list.concat([this.state.itemText])
        })
    }

    render() {
        return (<div className="Item">
                <h2>Count!</h2>
                <form id="itemForm" onSubmit={this.onSubmit} >
                    <input name="textBox" onChange={this.onChange}/>
                    <input type="button" value="cancel"/>
                    <input type="submit" value="Go"/>
                </form>

                <ul onClick={this.onClick}>
                {this.state.list.map((item, index) => {
                    return <li  className="Item-bullet" key={index}> {item}</li>
                })}
            
                </ul></div>
                )
    }
}

export default Item;