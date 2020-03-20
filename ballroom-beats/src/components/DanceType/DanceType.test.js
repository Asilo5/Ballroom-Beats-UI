import React from 'react';
import renderer from 'react-test-renderer';
import DanceType from '../DanceType/DanceType';
import Navbar from '../Navbar/Navbar';

jest.mock('../Navbar/Navbar')

const mockProps = {
   navigation: {
     navigate: jest.fn(),
     getParam: jest.fn(),
   }
 };

describe('DanceType', () => {

    Navbar.mockImplementation(() => {
      return null
    })
   it('should match snapshot', () => {
    const dance = renderer.create(<DanceType navigation={mockProps.navigation} />).toJSON();
    expect(dance).toMatchSnapshot();
   });

});
