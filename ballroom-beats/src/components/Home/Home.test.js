import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home/Home';

describe('Home', () => {

   it('should match snapshot', () => {
    const home = renderer.create(<Home />).toJSON();
    expect(home).toMatchSnapshot();
   });

});