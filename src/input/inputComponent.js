import React, { Component } from 'react';

class InputComponent extends React.Component{ 
    constructor(props){ 
        super(); 
      }

render(){ 
    return (
        <form> 
            <label> 
                Input Item: 
                <input type="text" name="name" />
            </label>
            <button type="submit" name="Create"> Add Item</button>
        </form>
    ); 
}
}

export default InputComponent; 