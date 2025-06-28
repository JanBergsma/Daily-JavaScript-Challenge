import { describe, expect, test } from 'vitest'
/**
 *
 * @param {Object[]} travelLog
 * @return {float} the sum of distances
 *
 * You are given an array of objects, each representing
 * a travel log entry with the distance covered in that
 * entry.
 *
 * Calculate the total distance traveled based on the
 * entries provided. Each travel log entry object has a
 * 'distance' property indicating the traveled distance
 * for that entry.
 */
function totalTravelDistance(travelLog) {
  return travelLog.reduce((acc, entry) => acc + entry['distance'], 0.0)
}
// testMap<String, Object>
describe('totalTravelDistance', () => {
  test('a[{"distance": 5}, {"distance": 10}, {"distance": 2.5}]should return 17.5', () => {
    expect(
      totalTravelDistance([
        { distance: 5 },
        { distance: 10 },
        { distance: 2.5 },
      ])
    ).toBe(17.5)
  })
})
