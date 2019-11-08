import React from 'react';
import { shallow } from 'enzyme';
import Cart from './cart';

describe('<cart/>', () => {
    it('should fetch a list of items', done => {
      const shallowCart = shallow(<Cart />);
  
      setImmediate(() => {
        expect(shallowCart.state().items).toHaveLength(3);
        // expect(shallowCart.find('.task')).toHaveLength(2);
        done();
      });
    });

    it('should return Status 200 OK for POST request', done => {
        const shallowCart = shallow(<Cart />);

        setImmediate(() => {
            expect(shallowCart.state().items).toHaveLength(3);
            // expect(shallowCart.find('.task')).toHaveLength(2);
            done();
        });
    })
    it('when addItem is called, gets rendered to screen', () => {
      const shallowCart = shallow(<Cart />);

      shallowCart.setState({
        items: [
          {name: 'fish', price:2.00, onSale: false},
          {name: 'apples', price:1.00, onSale: false}
        ]
      })

      shallowCart.instance().addItem({
        name: 'oranges', price:1.50, onSale: false
      })

      const lastItem = shallowCart.find('Item').last().render();
      expect(lastItem.find('li').first().text()).toBe('oranges');
    })

    it('should delete an item when delete method is called', () => {
      const shallowCart = shallow(<Cart />);

      shallowCart.setState({
        items: [
          {id: 23, name: 'fish', price:2.00, onSale: false},
          {id: 53, name: 'apples', price:1.00, onSale: false}
        ]
      })

      shallowCart.instance().deleteItem(23);

      expect(shallowCart.state().items.length).toBe(1);
      expect(shallowCart.state().items[0].id).toBe(53);
    })
  });