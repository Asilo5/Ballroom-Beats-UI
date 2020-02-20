import React from 'react';
import renderer from 'react-test-renderer';
import AppNavigator from '../AppNavigator/AppNavigator';

describe('AppNavigator', () => {

   it('should match snapshot', () => {
    const appNav = renderer.create(<AppNavigator />).toJSON();
    expect(appNav).toMatchSnapshot();
   });

}); 