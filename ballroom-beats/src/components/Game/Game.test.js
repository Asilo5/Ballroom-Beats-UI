import React from 'react';
import renderer from 'react-test-renderer';
import Game from '../Game/Game';

describe('Game', () => {

   it('should match snapshot', () => {
    const game = renderer.create(<Game />).toJSON();
    expect(game).toMatchSnapshot();
   });

});