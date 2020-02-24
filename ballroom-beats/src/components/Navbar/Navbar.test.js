import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar/Navbar';

const mockProps = {
   navigation: {
     navigate: jest.fn()
   }
 };

describe('Navbar', () => {

   it('should match snapshot', () => {
    const navbar = renderer.create(<Navbar navigation={mockProps.navigation} />).toJSON();
    expect(navbar).toMatchSnapshot();
   });

});