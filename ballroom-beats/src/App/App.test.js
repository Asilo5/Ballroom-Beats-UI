import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { App }  from '../App/App';

describe('App', () => {

   it('should match snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot();
   });

});
