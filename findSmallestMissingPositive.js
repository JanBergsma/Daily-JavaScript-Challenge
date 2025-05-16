import { describe, expect, test } from 'vitest'
/**
 * Find the Smallest Missing Positive Integer
 * Write a function that takes an unsorted array of
 * integers and finds the smallest missing positive
 * integer.
 * The function should handle both positive and
 * negative integers efficiently.
 *
 *
 * Example:
 * Input: [3, 4, -1, 1]
 * Output: 2
 *
 * @param {number[]} arr
 * @returns {number}
 */
function findSmallestMissingPositive(nums) {
  const n = nums.length
  let contains_1 = false

  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      contains_1 = true
    } else if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = 1
    }
  }

  if (!contains_1) {
    return 1
  }

  for (let i = 0; i < n; i++) {
    const abs_num = Math.abs(nums[i])
    if (abs_num === n) {
      nums[0] = -Math.abs(nums[0])
    } else {
      nums[abs_num] = -Math.abs(nums[abs_num])
    }
  }

  for (let i = 1; i < n; i++) {
    if (nums[i] > 0) return i
  }

  if (nums[0] > 0) return n
  return n + 1
}

function findSmallestMissingPositive1(nums) {
  const seen = new Set(nums)
  const n = Math.max(Math.max(...nums), 0) + 2

  for (let i = 1; i < n; i++) {
    if (!seen.has(i)) {
      return i
    }
  }
}
describe('findSmallestMissingPositive', () => {
  test('[3, 4, -1, 1] should return 2', () => {
    expect(findSmallestMissingPositive([3, 4, -1, 1])).toBe(2)
  })
  test('[1,2,0] should return 3', () => {
    expect(findSmallestMissingPositive([1, 2, 0])).toBe(3)
  })
  test('[7,8,9,11,12]should return 1', () => {
    expect(findSmallestMissingPositive([7, 8, 9, 11, 12])).toBe(1)
  })
})
describe('findSmallestMissingPositiv1e', () => {
  test('[3, 4, -1, 1] should return 2', () => {
    expect(findSmallestMissingPositive1([3, 4, -1, 1])).toBe(2)
  })
  test('[1,2,0] should return 3', () => {
    expect(findSmallestMissingPositive1([1, 2, 0])).toBe(3)
  })
  test('[7,8,9,11,12]should return 1', () => {
    expect(findSmallestMissingPositive1([7, 8, 9, 11, 12])).toBe(1)
  })
})
