import React from 'react';
import Navbar from '../Navbar/Navbar';
import { shallow } from 'enzyme';

describe('Navbar', () => {

   it('should match snapshot', () => {
     const wrapper = shallow(<Navbar />);
     expect(wrapper).toMatchSnapshot();
   });

});