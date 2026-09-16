import { describe, expect, it } from 'vitest';
import { TRANSPORT_MODES } from './constants';

describe('transport mode catalogue', () => {
  it('contains all supported transport modes', () => {
    expect(TRANSPORT_MODES).toHaveLength(4);
    expect(TRANSPORT_MODES.map((mode) => mode.id)).toEqual(['terrestre', 'maritimo', 'aereo', 'ferreo']);
  });

  it('provides complete ratings for every mode', () => {
    const ratingKeys = ['cost', 'speed', 'capacity', 'flexibility', 'eco'] as const;
    for (const mode of TRANSPORT_MODES) {
      expect(mode.title).toBeTruthy();
      expect(mode.description).toBeTruthy();
      expect(mode.means.length).toBeGreaterThan(0);
      expect(mode.advantages.length).toBeGreaterThan(0);
      expect(mode.disadvantages.length).toBeGreaterThan(0);
      for (const key of ratingKeys) {
        expect(mode.ratings[key].label).toBeTruthy();
        expect(mode.ratings[key].value).toBeTruthy();
        expect(['high', 'medium', 'low', 'neutral']).toContain(mode.ratings[key].level);
      }
    }
  });
});
