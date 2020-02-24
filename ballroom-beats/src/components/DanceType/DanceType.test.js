import React from 'react';
import renderer from 'react-test-renderer';
import DanceType from '../DanceType/DanceType';

const mockProps = {
   navigation: {
     navigate: jest.fn()
   }
 };
 

describe('DanceType', () => {

   it('should match snapshot', () => {
    const dance = renderer.create(<DanceType navigation={mockProps.navigation} />).toJSON();
    expect(dance).toMatchSnapshot();
   });

});