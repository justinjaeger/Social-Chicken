import React from 'react';
import { configure, shallow } from 'enzyme'; // enzyme thing
import Adapter from 'enzyme-adapter-react-16'; // enzyme thing

import App from '../client/App';
import MainContainer from '../client/components/MainContainer';
import EventsFeed from '../client/components/EventsFeed';
import Event from '../client/components/Event';
import Profile from '../client/components/Profile';

configure({ adapter: new Adapter() }); // enzyme thing

it('renders App without crashing', () => {
  shallow(<App />);
})

describe('Frontend Unit testing', () => {

  // ============= MAIN CONTAINER ================ //
//   describe('MainContainer', () => {
//     let wrapper;
//     const props = {
//       events: [],
//       deleteEvent: jest.fn()
//     };

//     beforeAll(() => {
//       wrapper = shallow(<MainContainer {...props} />);
//     });

//     it('Should render EventsFeed with events prop inside', () => {
//       expect(wrapper.containsMatchingElement(<EventsFeed events={props.events} />)).toEqual(true);
//     });
//     it('Should render EventsFeed with deleteEvent prop inside', () => {
//       expect(wrapper.containsMatchingElement(<EventsFeed deleteEvent={props.deleteEvent} />)).toEqual(true);
//     });

//   });

  // ============= EVENTS FEED ================ //
//   describe('EventsFeed', () => {
//     let wrapper;
//     const props = {
//       userUpdate: '',
//     }

//     beforeAll(() => {
//       wrapper = shallow(<EventsFeed {...props} />);
//     });

//     it('Should render userUpdate', () => {
//       expect(wrapper.containsMatchingElement(<Event userUpdate={props.userUpdate} />)).toEqual(true);
//     });

//   });
    
  // ============= PROFILE ================ //
  describe('Profile', () => {
    let wrapper;
    const props = {};

    beforeAll(() => {
      wrapper = shallow(<Profile {...props} />);
    });

    it('Renders a <div> tag', () => {
      expect(wrapper.type()).toEqual('div');
    });
    it('has a class "profile"', () => {
      expect(wrapper.hasClass('profile')).toBe(true);
    });
    it('renders an image', () => {
      expect(wrapper.contains(<img src={props.profilephoto} />)).toEqual(true)
    });

  });
})


// data.rows[0] {
//     userid: 3,
//     username: 'danlinxd91@gmail.com',
//     firstname: 'Dan',
//     lastname: 'Lin',
//     profilephoto: 'https://lh4.googleusercontent.com/--q_RD44ViWk/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckRhn7v-DYFhoUYjDOLWpOyKvHiXg/s96-c/photo.jpg'
//   }

// describe('indirectly testing "incrementCounter" through click simulation', () => {
//     it('should update the count by 1 when invoked by default', () => {
//       const wrapper = shallow(<Home />);
//       expect(wrapper.state('counter')).toBe(0);
//       wrapper.find('button').simulate('click');
//       expect(wrapper.state('counter')).toBe(1);
//     });
//     it('should add two to the count when the "two" value is true', () => {
//       const wrapper = shallow(<Home two />);
//       expect(wrapper.state('counter')).toBe(0);
//       wrapper.find('button').simulate('click');
//       expect(wrapper.state('counter')).toBe(2);
//     });
//   });