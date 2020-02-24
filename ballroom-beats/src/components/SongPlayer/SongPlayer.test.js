import React from 'react';
import renderer from 'react-test-renderer';
import SongPlayer from '../SongPlayer/SongPlayer';

describe('SongPlayer', () => {

   it('should match snapshot', () => {
    const player = renderer.create(<SongPlayer />).toJSON();
    expect(player).toMatchSnapshot();
   });
 
});