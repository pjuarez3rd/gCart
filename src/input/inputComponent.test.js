import React from 'react'
import { shallow } from 'enzyme'
import InputComponent from './inputComponent'
 
describe('<Input/>', () => {
 
    test('verify the input component is created', ()=>{ 
        const inputComponent = shallow(<InputComponent/>);         
        expect(inputComponent.matchesElement(<form> 
            <label> 
            Input Item: 
                <input type="text" name="name" />
            </label>
            <button type="submit" name="Create"> Add Item</button>
        </form>)).toEqual(true);
    });

    test('verify component accepts input', () => {

    });

});