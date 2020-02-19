import React from 'react';
import renderer from 'react-test-renderer';
import Score from '../Score/Score';

describe('Score', () => {

   it('should match snapshot', () => {
    const score = renderer.create(<Score />).toJSON();
    expect(score).toMatchSnapshot();
   });

});