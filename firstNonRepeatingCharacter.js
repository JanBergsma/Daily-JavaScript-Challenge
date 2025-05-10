import { describe, expect, test } from 'vitest'

const rgx = /[\p{ASCII}]+/u

/**
 * Find Non-Repeating Character
 * Given a string, find the first non-repeating
 * character in it and return its index.
 * If it doesn't exist, return -1.
 * The function should only consider
 * ASCII characters and be case-sensitive.
 *
 * Example:
 * Input: 'swiss'
 * Output: 1
 *
 *
 * @param {*} s
 */
function firstNonRepeatingCharacter(s) {
  const seen = new Map()

  for (const c of s) {
    if (rgx.test(c)) {
      if (!seen.has(c)) {
        seen.set(c, 0)
      }
      seen.set(c, seen.get(c) + 1)
    }
  }

  for (let i = 0; i < s.length; ++i) {
    if (seen.has(s[i]) && seen.get(s[i]) === 1) {
      return i
    }
  }
  return -1
}

describe('firstNonRepeatingCharacter', () => {
  test('"sss"  should return- 1', () => {
    expect(firstNonRepeatingCharacter('sss')).toBe(-1)
  })
  test('"swiss"  should return 1', () => {
    expect(firstNonRepeatingCharacter('swiss')).toBe(1)
  })
  test('"loveleetcode"  should return 2', () => {
    expect(firstNonRepeatingCharacter('loveleetcode')).toBe(2)
  })
  test('"aabb"  should return 1', () => {
    expect(firstNonRepeatingCharacter('aabb')).toBe(-1)
  })
  test('"a" should return 0', () => {
    expect(firstNonRepeatingCharacter('a')).toBe(0)
  })
  test('"©a" should return 1', () => {
    expect(firstNonRepeatingCharacter('©a')).toBe(1)
  })
})
