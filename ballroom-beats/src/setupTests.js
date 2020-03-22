import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'array-flat-polyfill';
import EStyleSheet from 'react-native-extended-stylesheet';
//I'm using an outdated version of Node, so https://www.npmjs.com/package/array-flat-polyfill
//https://github.com/vitalets/react-native-extended-stylesheet#caveats - you have to build the style sheet in your tests

EStyleSheet.build({
  $bgColor: 'pink',
});

configure({ adapter: new Adapter() });
