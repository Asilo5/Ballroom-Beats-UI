import React from 'react';
// import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App  from '../App/App';

// describe('App', () => {

//    it('should match snapshot', () => {
//     const wrapper = shallow(<App />)
//     console.log(wrapper);
//     expect(wrapper).toMatchSnapshot();
//    });
 
// });

const mockProps = {
   navigation: {
     navigate: jest.fn()
   }
 };


describe('App', () => {  


   it('should match snapshot', () => {
    const app = renderer.create(<App navigation={mockProps.navigation} />).toJSON();
    expect(app).toMatchSnapshot();
   });

});