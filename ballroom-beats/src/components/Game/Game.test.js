import React from 'react';
import renderer from 'react-test-renderer';
import Game from '../Game/Game';

describe('Game', () => {

  const mockProps = {
     navigation: {
       navigate: jest.fn(),
       getParam: jest.fn().mockImplementation((paramType) => {
         if (paramType === "song") {
           return {
                    title: "Beyond the Sea",
                    spotifyid: "none",
                    url: "beyond-the-sea",
                    delay: 0.167,
                    avbarduration: 1,
                    duration: 172.47,
                    tempo: 136.482,
                    TimeSignature: 4
                  }
         }

         if (paramType === "dance") {
           return "Waltz"
         }
       }),
     }
   };

   it('should match snapshot', () => {
    const game = renderer.create(<Game navigation={mockProps.navigation} song={mockProps.navigation.getParam} dance={mockProps.navigation.getParam} />).toJSON();

    expect(game).toMatchSnapshot();
   });
});
