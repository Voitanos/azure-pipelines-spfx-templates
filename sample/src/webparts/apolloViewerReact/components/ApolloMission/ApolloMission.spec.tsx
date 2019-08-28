import * as React from 'react';
import 'jest';
import { shallow, ShadowWrapper } from 'enzyme';

import { IMission } from './../../../../models';
import { ApolloMission } from './';

let _mission: IMission = undefined;
let _onRemoveMissionCallback: jest.Mock;

beforeAll(() => {
  _mission = {
      "id": "AS-506",
      "name": "Apollo 11",
      "launch_date": "07/16/1969",
      "end_date": "07/24/1969",
      "image": "apollo-11.png",
      "wiki_href": "https://en.wikipedia.org/wiki/Apollo_11",
      "summary": "First manned landing, in Tranquility Base, Sea of Tranquility. Surface EVA time: 2:31 hr. Samples returned: 47.51 pounds (21.55 kg)",
      "crew": [
        {
          "role": "Commander",
          "astronaut_id": "3"
        },
        {
          "role": "Pilot",
          "astronaut_id": "1"
        },
        {
          "role": "Sr Pilot",
          "astronaut_id": "8"
        },
        {
          "role": "Command Module Pilot",
          "astronaut_id": "8"
        },
        {
          "role": "Lunar Module Pilot",
          "astronaut_id": "1"
        },
      ]
    };
});

beforeEach(() => {
  // create callback for clicking remove button
  _onRemoveMissionCallback = jest.fn();
});

test('should render mission', () => {
  const wrapper = shallow(<ApolloMission mission={ _mission } />);
  expect(wrapper).toMatchSnapshot();
});

test('raise onRemoveMission event when when remove button clicked', () => {
  // create component
  const wrapper = shallow(<ApolloMission mission={ _mission } onRemoveMission={ _onRemoveMissionCallback } />);
  
  // get all anchor tags which are actually buttons
  const buttons = wrapper.find('a');
  expect(buttons.length).toBe(2);

  // get the last button which is 'remove'
  const removeButton: ShadowWrapper = buttons.at(1);
  // simulate clicking the button...
  //  - pass in mock event object that implements the called 
  //    'preventDefault()' method in the actual implementation
  removeButton.simulate('click', { preventDefault: () => undefined });

  // make sure callback called 1 time when button clicked & submitted the mission back
  expect(_onRemoveMissionCallback).toHaveBeenCalled();
  expect(_onRemoveMissionCallback).toHaveBeenCalledTimes(1);
});

test('return mission when remove button clicked', () => {
  // create component
  const wrapper = shallow(<ApolloMission mission={ _mission } onRemoveMission={ _onRemoveMissionCallback } />);
  
  // get all anchor tags which are actually buttons
  const buttons = wrapper.find('a');
  expect(buttons.length).toBe(2);

  // get the last button which is 'remove'
  const removeButton: ShadowWrapper = buttons.at(1);
  // simulate clicking the button...
  //  - pass in mock event object that implements the called 
  //    'preventDefault()' method in the actual implementation
  removeButton.simulate('click', { preventDefault: () => undefined });

  // make sure callback called 1 time when button clicked & submitted the mission back
  expect(_onRemoveMissionCallback).toHaveBeenCalledWith(_mission);
});