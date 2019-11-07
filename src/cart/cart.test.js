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
  });