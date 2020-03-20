import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../Loader/Loader';

const mockProps = {
   navigation: {
     navigate: jest.fn(),
     getParam: jest.fn(),
   }
 };

describe('Loader', () => {

   it('should match snapshot', () => {
    const loader = renderer.create(<Loader navigation={mockProps.navigation} />).toJSON();
    expect(loader).toMatchSnapshot();
   });

});
