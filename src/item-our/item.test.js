import React from 'react'
import { shallow } from 'enzyme'
import Item from './item'

describe('<Item/>', () => {
    test('should start with a default list item', () => {
        const item = shallow(<Item/>);
        
        expect(item.state().list).toEqual(['one','two','three']);
    });

    test('on change we should have the input text in state', () => {
        const item = shallow(<Item/>);
        let called = false;
        const pd = jest.fn(() => {
            called = true;
        });

        item.find('[name="textBox"]').simulate('change', {
            target: {value: 'New Item'},
            preventDefault: pd
        })

        expect(pd.mock.calls).toHaveLength(1);
        expect(called).toBe(true);

        setImmediate(() => {
            expect(item.state().itemText).toBe('New Item')
        })
    });

    test('should add item to state when form is submitted', () => {
        const item = shallow(<Item/>);
        const pd = jest.fn(() => {});

        item.find('[name="textBox"]').simulate('change', {
            target: {value: 'New Item'},
            preventDefault: pd
        })

        item.find('#itemForm').simulate('submit', {
            preventDefault: pd
        });

        expect(pd.mock.calls.length).toBe(2);

        setImmediate(() => {
            expect(item.state().itemText).toBe('New Item')
        })
    });
    test('should add item to state when form is submitted', () => {
        const item = shallow(<Item/>);
        const pd = jest.fn(() => {});

        item.find('[name="textBox"]').simulate('change', {
            target: {value: 'New Item'},
            preventDefault: pd
        })
 
    });
   
  
});

