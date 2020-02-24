import React from 'react';
import renderer from 'react-test-renderer';
import SongPick from '../SongPick/SongPick';

const mockProps = {
   navigation: {
     navigate: jest.fn()
   }
 }; 

describe('SongPick', () => {

   it('should match snapshot', () => {
    const song = renderer.create(<SongPick navigation={mockProps.navigation} />).toJSON();
    expect(song).toMatchSnapshot();
   });

});