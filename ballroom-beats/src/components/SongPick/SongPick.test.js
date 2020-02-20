import React from 'react';
import renderer from 'react-test-renderer';
import SongPick from '../SongPick/SongPick';

describe('SongPick', () => {

   it('should match snapshot', () => {
    const song = renderer.create(<SongPick />).toJSON();
    expect(song).toMatchSnapshot();
   });

});