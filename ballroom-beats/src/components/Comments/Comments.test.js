import React from 'react';
import renderer from 'react-test-renderer';
import Comments from './Comments';


describe('Comments', () => {

   it('should match snapshot', () => {
    const comments = renderer.create(<Comments />).toJSON();
    expect(comments).toMatchSnapshot();
   });

});
