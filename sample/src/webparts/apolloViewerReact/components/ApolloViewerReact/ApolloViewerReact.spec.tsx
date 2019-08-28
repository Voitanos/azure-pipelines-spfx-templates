import * as React from 'react';
import 'jest';
import { shallow } from 'enzyme';

import { IMission } from './../../../../models';
import { ApolloViewerReact } from './';

let _missionsSetA: IMission[] = undefined;
let _missionsSetB: IMission[] = undefined;

beforeAll(() => {
  // start with three missions
  _missionsSetA = [
    {
      "id": "AS-510",
      "name": "Apollo 15",
      "launch_date": "07/26/1971",
      "end_date": "08/07/1971",
      "image": "apollo-15.png",
      "wiki_href": "https://en.wikipedia.org/wiki/Apollo_15",
      "summary": "First Extended LM and rover, landed in Hadley-Apennine. Surface EVA time:18:33 hr. Samples returned: 169.10 pounds (76.70 kg).",
      "crew": [
        {
          "role": "Commander",
          "astronaut_id": "26"
        },
        {
          "role": "Pilot",
          "astronaut_id": "17"
        },
        {
          "role": "Sr Pilot",
          "astronaut_id": "31"
        },
        {
          "role": "Command Module Pilot",
          "astronaut_id": "31"
        },
        {
          "role": "Lunar Module Pilot",
          "astronaut_id": "17"
        },
      ]
    },
    {
      "id": "AS-511",
      "name": "Apollo 16",
      "launch_date": "04/16/1972",
      "end_date": "04/27/1972",
      "image": "apollo-16.png",
      "wiki_href": "https://en.wikipedia.org/wiki/Apollo_16",
      "summary": "Landed in Plain of Descartes. Surface EVA time: 20:14 hr. Samples returned: 207.89 pounds (94.30 kg).",
      "crew": [
        {
          "role": "Commander",
          "astronaut_id": "32"
        },
        {
          "role": "Pilot",
          "astronaut_id": "11"
        },
        {
          "role": "Sr Pilot",
          "astronaut_id": "19"
        },
        {
          "role": "Command Module Pilot",
          "astronaut_id": "29"
        },
        {
          "role": "Lunar Module Pilot",
          "astronaut_id": "11"
        },
      ]
    },
    {
      "id": "AS-512",
      "name": "Apollo 17",
      "launch_date": "12/07/1972",
      "end_date": "12/19/1972",
      "image": "apollo-17.png",
      "wiki_href": "https://en.wikipedia.org/wiki/Apollo_17",
      "summary": "Only Saturn V night launch. Landed in Taurus-Littrow. First geologist on the Moon. Final manned Moon landing. Surface EVA time: 22:02 hr. Samples returned: 243.40 pounds (110.40 kg).",
      "crew": [
        {
          "role": "Commander",
          "astronaut_id": "6"
        },
        {
          "role": "Pilot",
          "astronaut_id": "24"
        },
        {
          "role": "Sr Pilot",
          "astronaut_id": "13"
        },
        {
          "role": "Command Module Pilot",
          "astronaut_id": "13"
        },
        {
          "role": "Lunar Module Pilot",
          "astronaut_id": "24"
        },
      ]
    }
  ];
  // slice down to 2 missions
  _missionsSetB = _missionsSetA.slice(1);
});

test('renders set A of missions', () => {
  const wrapper = shallow(<ApolloViewerReact description="" />);

  // set state to show 3 missions
  wrapper.setState({ missions: _missionsSetA });
  expect(wrapper).toMatchSnapshot();

  // change state to only show 2 missions
  wrapper.setState({ missions: _missionsSetB });
  expect(wrapper).toMatchSnapshot();
});