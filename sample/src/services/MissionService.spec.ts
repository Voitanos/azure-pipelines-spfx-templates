import 'jest';

import { MissionService } from './';

describe('Mission Service', () => {

  describe('getMissions()', () => {

    test('getMissions() - returns multiple missions', () => {
      const missions = MissionService.getMissions();

      expect(missions.length).toBeGreaterThan(1);
    });

  });

  describe('getMission()', () => {

    test('getMission() - get one mission', () => {
      const mission = MissionService.getMission('AS-201');

      expect(mission).toBeDefined();
    });

    test('getMission() - get specific mission', () => {
      const mission = MissionService.getMission('AS-501');

      expect(mission).toBeDefined();
      expect(mission.name).toBe('Apollo 4');
    });

    test('getMission() - no valid mission', () => {
      const mission = MissionService.getMission('AS-XXX');

      expect(mission).toBeUndefined();
    });

  });

});