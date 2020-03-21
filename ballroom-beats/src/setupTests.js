import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'array-flat-polyfill';
//I'm using an outdated version of Node, so https://www.npmjs.com/package/array-flat-polyfill

configure({ adapter: new Adapter() });
