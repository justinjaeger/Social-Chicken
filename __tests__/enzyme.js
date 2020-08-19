import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Profile from '../client/components/Profile';

configure({ adapter: new Adapter() });


describe('React unit tests', () => {
    describe('Profile', () => {
      let wrapper;
      const props = {

      };
  
      beforeAll(() => {
        wrapper = shallow(<Profile {...props} />);
      });
  
      it('Renders a <div> tag', () => {
        expect(wrapper.type()).toEqual('div');

      });
    });
})