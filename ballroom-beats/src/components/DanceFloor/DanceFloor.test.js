import React from 'react';
import renderer from 'react-test-renderer';
import DanceFloor from './DanceFloor';


describe('DanceFloor', () => {

  const mockSong = {
           title: "Beyond the Sea",
           spotifyid: "none",
           url: "beyond-the-sea",
           delay: 0.167,
           avbarduration: 1,
           duration: 172.47,
           tempo: 136.482,
           TimeSignature: 4
         };


   it('should match snapshot', () => {
    const dancefloor = renderer.create(<DanceFloor
      start={jest.fn()}
      song={mockSong}
      dance={"Waltz"}
      stopMusic={jest.fn()}
      stopDance={jest.fn()}
      />).toJSON();
    expect(dancefloor).toMatchSnapshot();
   });

});
