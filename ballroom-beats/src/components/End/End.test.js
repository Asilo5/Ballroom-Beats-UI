import React from 'react';
import renderer from 'react-test-renderer';
import End from '../End/End';

describe('End', () => {

   it('should match snapshot', () => {
    const end = renderer.create(<End />).toJSON();
    expect(end).toMatchSnapshot();
   });

});