import { IMission } from '../models';

export class MissionService {

  private static _missions: IMission[] = <IMission[]>[
    {
      "id": "AS-201",
      "name": "",
      "launch_date": "02/26/1966",
      "end_date": "",
      "image": "as-201.png",
      "wiki_href": "https://en.wikipedia.org/wiki/AS-201",
      "summary": "First flight of Saturn IB and Block I CSM; suborbital to Atlantic Ocean; qualified heat shield to orbital reentry speed",
      "crew": []
    },
    {
      "id": "AS-203",
      "name": "",
      "launch_date": "07/05/1966",
      "end_date": "",
      "image": "as-203.png",
      "wiki_href": "https://en.wikipedia.org/wiki/AS-203",
      "summary": "No spacecraft; observations of liquid hydrogen fuel behavior in orbit, to support design of S-IVB restart capability.",
      "crew": []
    },
    {
      "id": "AS-202",
      "name": "",
      "launch_date": "08/25/1966",
      "end_date": "",
      "image": "as-202.png",
      "wiki_href": "https://en.wikipedia.org/wiki/AS-202",
      "summary": "Suborbital flight of CSM to Pacific Ocean. ",
      "crew": []
    },
    {
      "id": "AS-204",
      "name": "Apollo 1",
      "launch_date": "",
      "end_date": "",
      "image": "apollo-1.png",
      "wiki_href": "https://en.wikipedia.org/wiki/Apollo_1",
      "summary": "Not flown; all crew members perished in fire on launch pad on January 27, 1967",
      "crew": [
        {
          "role": "Commander",
          "astronaut_id": "15"
        },
        {
          "role": "Pilot",
          "astronaut_id": "7"
        },
        {
          "role": "Sr Pilot",
          "astronaut_id": "30"
        }
      ]
    },
    {
      "id": "AS-501",
      "name": "Apollo 4",
      "launch_date": "11/09/1967",
      "end_date": "",
      "image": "",
      "wiki_href": "https://en.wikipedia.org/wiki/Apollo_4",
      "summary": "First test flight of Saturn V, placed a CSM in a high Earth orbit; demonstrated S-IVB restart; qualified CM heat shield to lunar reentry speed",
      "crew": []
    },
    {
      "id": "AS-204",
      "name": "Apollo 5",
      "launch_date": "01/22/1968",
      "end_date": "01/23/1968",
      "image": "apollo-5.png",
      "wiki_href": "https://en.wikipedia.org/wiki/Apollo_5",
      "summary": "Earth orbital flight test of LM, launched on Saturn IB; demonstrated ascent and descent propulsion; man-rated the LM",
      "crew": []
    },
    {
      "id": "AS-502",
      "name": "Apollo 6",
      "launch_date": "04/04/1968",
      "end_date": "",
      "image": "",
      "wiki_href": "https://en.wikipedia.org/wiki/Apollo_6",
      "summary": "Unmanned, attempted demonstration of trans-lunar injection, and direct-return abort using SM engine; three engine failures, including failure of S-IVB restart. Flight controllers used SM engine to repeat Apollo 4's flight profile. Man-rated the Saturn V.",
      "crew": []
    },
    {
      "id": "AS-205",
      "name": "Apollo 7",
      "launch_date": "10/11/1968",
      "end_date": "10/22/1968",
      "image": "apollo-7.png",
      "wiki_href": "https://en.wikipedia.org/wiki/Apollo_7",
      "summary": "First manned Earth orbital demonstration of Block II CSM, launched on Saturn IB. First live television publicly broadcast from a manned mission",
      "crew": [
        {
          "role": "Commander",
          "astronaut_id": "23"
        },
        {
          "role": "Pilot",
          "astronaut_id": "10"
        },
        {
          "role": "Sr Pilot",
          "astronaut_id": "12"
        },
        {
          "role": "Command Module Pilot",
          "astronaut_id": "12"
        },
        {
          "role": "Lunar Module Pilot",
          "astronaut_id": "10"
        },
      ]
    },
    {
      "id": "AS-503",
      "name": "Apollo 8",
      "launch_date": "12/21/1968",
      "end_date": "12/27/1968",
      "image": "apollo-8.png",
      "wiki_href": "https://en.wikipedia.org/wiki/Apollo_8",
      "summary": "First manned flight to Moon; CSM made 10 lunar orbits in 20 hours.",
      "crew": [
        {
          "role": "Commander",
          "astronaut_id": "5"
        },
        {
          "role": "Pilot",
          "astronaut_id": "2"
        },
        {
          "role": "Sr Pilot",
          "astronaut_id": "18"
        },
        {
          "role": "Command Module Pilot",
          "astronaut_id": "18"
        },
        {
          "role": "Lunar Module Pilot",
          "astronaut_id": "2"
        },
      ]
    },
    {
      "id": "AS-504",
      "name": "Apollo 9",
      "launch_date": "03/03/1969",
      "end_date": "05/13/1969",
      "image": "apollo-9.png",
      "wiki_href": "https://en.wikipedia.org/wiki/Apollo_9",
      "summary": "First manned flight of CSM and LM in Earth orbit; demonstrated Portable Life Support System to be used on the lunar surface",
      "crew": [
        {
          "role": "Commander",
          "astronaut_id": "20"
        },
        {
          "role": "Pilot",
          "astronaut_id": "25"
        },
        {
          "role": "Sr Pilot",
          "astronaut_id": "26"
        },
        {
          "role": "Command Module Pilot",
          "astronaut_id": "26"
        },
        {
          "role": "Lunar Module Pilot",
          "astronaut_id": "25"
        },
      ]
    },
    {
      "id": "AS-505",
      "name": "Apollo 10",
      "launch_date": "05/18/1969",
      "end_date": "05/26/1969",
      "image": "apollo-10.png",
      "wiki_href": "https://en.wikipedia.org/wiki/Apollo_10",
      "summary": "Dress rehearsal for first lunar landing; flew LM down to 50,000 feet (15 km) from lunar surface",
      "crew": [
        {
          "role": "Commander",
          "astronaut_id": "28"
        },
        {
          "role": "Pilot",
          "astronaut_id": "6"
        },
        {
          "role": "Sr Pilot",
          "astronaut_id": "32"
        },
        {
          "role": "Command Module Pilot",
          "astronaut_id": "32"
        },
        {
          "role": "Lunar Module Pilot",
          "astronaut_id": "6"
        },
      ]
    },
    {
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
    },
    {
      "id": "AS-507",
      "name": "Apollo 12",
      "launch_date": "11/14/1969",
      "end_date": "11/24/1969",
      "image": "apollo-12.png",
      "wiki_href": "https://en.wikipedia.org/wiki/Apollo_12",
      "summary": "Second landing, in Ocean of Storms near Surveyor 3 . Surface EVA time: 7:45 hr. Samples returned: 75.62 pounds (34.30 kg)",
      "crew": [
        {
          "role": "Commander",
          "astronaut_id": "9"
        },
        {
          "role": "Pilot",
          "astronaut_id": "4"
        },
        {
          "role": "Sr Pilot",
          "astronaut_id": "14"
        },
        {
          "role": "Command Module Pilot",
          "astronaut_id": "14"
        },
        {
          "role": "Lunar Module Pilot",
          "astronaut_id": "4"
        },
      ]
    },
    {
      "id": "AS-508",
      "name": "Apollo 13",
      "launch_date": "04/11/1970",
      "end_date": "04/17/1970",
      "image": "apollo-13.png",
      "wiki_href": "https://en.wikipedia.org/wiki/Apollo_13",
      "summary": "Third landing attempt aborted near the Moon, due to SM failure. Crew used LM as \"life boat\" to return to Earth.",
      "crew": [
        {
          "role": "Commander",
          "astronaut_id": "18"
        },
        {
          "role": "Pilot",
          "astronaut_id": "16"
        },
        {
          "role": "Sr Pilot",
          "astronaut_id": "29"
        },
        {
          "role": "Command Module Pilot",
          "astronaut_id": "29"
        },
        {
          "role": "Lunar Module Pilot",
          "astronaut_id": "16"
        },
      ]
    },
    {
      "id": "AS-509",
      "name": "Apollo 14",
      "launch_date": "01/31/1971",
      "end_date": "02/09/1971",
      "image": "apollo-14.png",
      "wiki_href": "https://en.wikipedia.org/wiki/Apollo_14",
      "summary": "Third landing, in Fra Mauro formation. Surface EVA time: 9:21 hr. Samples returned: 94.35 pounds (42.80 kg).",
      "crew": [
        {
          "role": "Commander",
          "astronaut_id": "27"
        },
        {
          "role": "Pilot",
          "astronaut_id": "21"
        },
        {
          "role": "Sr Pilot",
          "astronaut_id": "22"
        },
        {
          "role": "Command Module Pilot",
          "astronaut_id": "22"
        },
        {
          "role": "Lunar Module Pilot",
          "astronaut_id": "21"
        },
      ]
    },
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

  /**
   * Return collection of all NASA Apollo missions.
   * 
   * @returns {IMission[]}    
   * @memberof MissionService
   */
  public static getMissions(): IMission[] {
    return this._missions;
  }

  /**
   * Retrieve a single mission using the specified mission ID.
   * 
   * @static
   * @param {string}    missionId - ID of the mission to retrieve.
   * @returns {IMission} 
   * @memberof MissionService
   */
  public static getMission(missionId: string): IMission {
    return this._missions.filter((mission: IMission) => mission.id === missionId)[0];
  }

} // class MissionService