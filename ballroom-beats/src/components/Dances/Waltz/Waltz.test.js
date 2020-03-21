import React from 'react';
import renderer from 'react-test-renderer';
import Waltz from './Waltz';


describe('Waltz', () => {

   it('should match snapshot', () => {
    const waltz = renderer.create(<Waltz
      start={jest.fn()}
      song={jest.fn()}
      stopDance={jest.fn()}
      stopMusic={jest.fn()}
      />).toJSON();
    expect(waltz).toMatchSnapshot();
   });

});
