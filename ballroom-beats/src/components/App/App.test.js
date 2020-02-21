import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {

   it('should match snapshot', () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
   });

});