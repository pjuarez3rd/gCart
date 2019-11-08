import React from 'react'
import { shallow } from 'enzyme'
import Item from './item'
import ItemModel from './item.model'
import Cart from '../cart/cart';

describe('<Item/>', () => {
    test('should start with a default list item', () => {
        const thing = shallow(<Item name ='itemNameName' item={new ItemModel('Thing2', 14, false)}/>);
        
        expect(thing.find('div').length).toBe(1);
        expect(thing.find('li').at(0).text()).toBe('Thing2');
        expect(thing.find('li').at(1).text()).toBe('$14.00 ');
        expect(thing.find('button').text()).toBe('Delete');
    });

    // test('add 1 item', ()=>{ 
    //     const testItem = new Item(); 
    //     testItem.addItem(new ItemModel('Thing2', 14, false)); 
    //      expect(testItem.itemsArray().length).toBe(1);  
    // })
    test('verify inputComponent is added to cart component', ()=> { 
        const itemComponent = shallow(<Cart />);         

       expect(itemComponent.find('InputComponent')).toHaveLength(1); 
    })
    test('verify item is deleted when delete is clicked', ()=>{ 

        let onClickCallback = jest.fn(()=> null); 
        const shallowItem = shallow(<Item item={{name:'fish'}} onDelete={onClickCallback}/>); 
         shallowItem.find('button').simulate('click'); 

        expect(onClickCallback.mock.calls.length).toBe(1); 
    })

});

