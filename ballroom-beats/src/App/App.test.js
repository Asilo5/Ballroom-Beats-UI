import React from 'react';
import { shallow } from 'enzyme';
import App  from '../App/App';

describe('App', () => {

   it('should match snapshot', () => {
    const wrapper = shallow(<App />)
    console.log(wrapper);
    expect(wrapper).toMatchSnapshot();
   });
 
});