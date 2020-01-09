import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const fetch = require('node-fetch');
const FormData = require('form-data');

configure({ adapter: new Adapter() });

global.fetch = fetch;
global.FormData = FormData;