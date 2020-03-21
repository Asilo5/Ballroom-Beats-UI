import React from 'react';
import renderer from 'react-test-renderer';
import End from '../End/End';

const mockProps = {
   navigation: {
     navigate: jest.fn(),
     getParam: jest.fn().mockImplementation(() => {
       return "Try to keep up!"
     }),
   }
 };

describe('End', () => {

   it('should match snapshot', () => {
    const end = renderer.create(<End navigation={mockProps.navigation} />).toJSON();
    expect(end).toMatchSnapshot();
   });

});
