import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../Loader/Loader';

describe('Loader', () => {

   it('should match snapshot', () => {
    const loader = renderer.create(<Loader />).toJSON();
    expect(loader).toMatchSnapshot();
   });

});