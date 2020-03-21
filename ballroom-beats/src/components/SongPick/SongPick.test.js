import React from 'react';
import renderer from 'react-test-renderer';
import SongPick from '../SongPick/SongPick';
import Navbar from '../Navbar/Navbar';

jest.mock('../Navbar/Navbar')

const mockProps = {
   navigation: {
     navigate: jest.fn(),
     getParam: jest.fn(),
   }
 };

describe('SongPick', () => {

    Navbar.mockImplementation(() => {
      return null
    })
   it('should match snapshot', () => {
    const song = renderer.create(<SongPick navigation={mockProps.navigation} />).toJSON();
    expect(song).toMatchSnapshot();
   });

});
