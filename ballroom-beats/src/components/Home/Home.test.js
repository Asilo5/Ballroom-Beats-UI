import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home/Home';

const mockProps = {
   navigation: {
     navigate: jest.fn(),
     getParam: jest.fn(),
   }
 };

describe('Home', () => {

   it('should match snapshot', () => {
    const home = renderer.create(<Home navigation={mockProps.navigation} />).toJSON();
    expect(home).toMatchSnapshot();
   });

});
