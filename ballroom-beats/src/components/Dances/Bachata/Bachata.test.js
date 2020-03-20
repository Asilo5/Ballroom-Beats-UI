import React from 'react';
import renderer from 'react-test-renderer';
import Bachata from './Bachata';


describe('Bachata', () => {

   it('should match snapshot', () => {
    const bachata = renderer.create(<Bachata
      start={jest.fn()}
      song={jest.fn()}
      stopDance={jest.fn()}
      stopMusic={jest.fn()}
      />).toJSON();
    expect(bachata).toMatchSnapshot();
   });

});
