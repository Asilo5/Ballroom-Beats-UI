import React from 'react';
import renderer from 'react-test-renderer';
import DanceType from '../DanceType/DanceType';

describe('DanceType', () => {

   it('should match snapshot', () => {
    const dance = renderer.create(<DanceType />).toJSON();
    expect(dance).toMatchSnapshot();
   });

});