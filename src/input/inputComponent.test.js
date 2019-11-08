import React from 'react'
import { shallow } from 'enzyme'
import InputComponent from './inputComponent'
 
describe('<Input/>', () => {
 
    let WRAPPER; 
    let addItemCallback;
    beforeEach(() => {
       
        addItemCallback = jest.fn(() => null);
        WRAPPER = shallow(<InputComponent addItem={addItemCallback}/>);
    })

    test('verify the name input is available', () => {
        expect(WRAPPER.find({name: 'name'})).toHaveLength(1);
    })

    test('verify the price input is available', () => {
        expect(WRAPPER.find({name: 'price'})).toHaveLength(1);
    })
    test('verify the onSale input is available', () => {
        expect(WRAPPER.find({name: 'onSale'})).toHaveLength(1);
    })
    test('verify name input onChange updated name input state', ()=> { 
       
        WRAPPER.find({name: 'name'}).simulate('change', {
            target: {
                value: 'appl'
            }
        }) 

        expect(WRAPPER.state().name).toBe('appl'); 

    })
    test('verify price input onChange updated price input state', ()=> { 
       
        WRAPPER.find({name: 'price'}).simulate('change', {
            target: {
                value: 14
            }
        }) 

        expect(WRAPPER.state().price).toBe(14); 

    })
    test('veriy onSale input onChange updated onSale input state', ()=> { 
       
        WRAPPER.find({name: 'onSale'}).simulate('change', {
            target: {
                checked: true
            }
        }) 

        expect(WRAPPER.state().onSale).toBe(true); 
    })

    test('when form is submitted calls additem callback', () => {
        WRAPPER.setState({
            name: 'Berries', price: 2.00, onSale: false
        })

        WRAPPER.find('form').simulate('submit', {
            preventDefault: jest.fn(() => null),
        })

        expect(addItemCallback.mock.calls.length).toBe(1);
    })
    test('form is NOT submitted when there is no name', () => {
        WRAPPER.setState({
            name: '', price: 2.00, onSale: false
        })
        WRAPPER.find('form').simulate('submit', {
            preventDefault: jest.fn(() => null),
        })
        expect(addItemCallback.mock.calls.length).toBe(0);
    })
    test('form is NOT submitted when the price is 0', () => {
        WRAPPER.setState({
            name: 'asdf', price: 0, onSale: false
        })
        WRAPPER.find('form').simulate('submit', {
            preventDefault: jest.fn(() => null),
        })

        expect(addItemCallback.mock.calls.length).toBe(0);
    })
});