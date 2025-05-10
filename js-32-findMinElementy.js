import { describe, expect, test } from 'vitest'

/**
 * Rotated Array Minimum Element
 *,W*rite a function that takes in a rotated sorted array and returns the smallest element. A rotated sorted array is a sorted array that has been rotated at an unknown pivot. Assume the array does not contain duplicates.
 *
 * Example:
 * Input: [4,5,6,7,0,1,2]*
 *  Output: 0
 * *
 * @param {Array[number] rotatedArray
 * @returns
 */
function findMinElement(rotatedArray) {
  return Math.min(...rotatedArray)
}

describe('findMinElement', () => {
  test('[4,5,6,7,0,1,2] should return 0', () => {
    expect(findMinElement([4, 5, 6, 7, 0, 1, 2])).toBe(0)
  })
  test('[6,7,1,2,3,4,5] Should return 1', () => {
    expect(findMinElement([6, 7, 1, 2, 3, 4, 5])).toBe(1)
  })
  test('[1,2,3,4,5,6,7] should return 1', () => {
    expect(findMinElement([1, 2, 3, 4, 5, 6, 7])).toBe(1)
  })
  test('[3,4,5,1,2] should return 1', () => {
    expect(findMinElement([3, 4, 5, 1, 2])).toBe(1)
  })
  test('[11,13,15,17,2,4,5,7] should return 2', () => {
    expect(findMinElement([11, 13, 15, 17, 2, 4, 5, 7])).toBe(2)
  })
})
