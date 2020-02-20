import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar/Navbar';

describe('Navbar', () => {

   it('should match snapshot', () => {
    const navbar = renderer.create(<Navbar />).toJSON();
    expect(navbar).toMatchSnapshot();
   });

});