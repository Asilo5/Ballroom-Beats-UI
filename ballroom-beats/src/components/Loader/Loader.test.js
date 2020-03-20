import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../Loader/Loader';
import Navbar from '../Navbar/Navbar';

jest.mock('../Navbar/Navbar')

const mockProps = {
   navigation: {
     navigate: jest.fn(),
     getParam: jest.fn(),
   }
 };

describe('Loader', () => {

    Navbar.mockImplementation(() => {
      return null
    })

   it('should match snapshot', () => {
    const loader = renderer.create(<Loader navigation={mockProps.navigation} />).toJSON();
    expect(loader).toMatchSnapshot();

   });

});
