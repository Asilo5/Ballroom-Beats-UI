import React from 'react';
import renderer from 'react-test-renderer';
import Salsa from './Salsa';


describe('Salsa', () => {

   it('should match snapshot', () => {
    const salsa = renderer.create(<Salsa
      start={jest.fn()}
      song={jest.fn()}
      stopDance={jest.fn()}
      stopMusic={jest.fn()}
      />).toJSON();
    expect(salsa).toMatchSnapshot();
   });

});
