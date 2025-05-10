import { describe, expect, test } from 'vitest'

/**
 * Check Anagram
 * Create a function that checks if two provided strings
 * are anagrams of each other.
 * An anagram is a word formed by rearranging the letters of
 * a different word, using all the original letters exactly
 *  once. *
 *
 * @param {String} s1
 * @param {String} s2
 * @returns {Boolean}
 */
function isAnagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false
  }
  const a1 = Array.from(s1).sort()
  const a2 = Array.from(s2).sort()

  return a1.every((e, i) => e === a2[i])
}

describe('isAnagram', () => {
  test('abba baab should return true', () => {
    expect(isAnagram('abba', 'baab')).toBe(true)
  })
  test('abba baa should return false', () => {
    expect(isAnagram('abba', 'baa')).toBe(false)
  })
  test('abba babb should return false', () => {
    expect(isAnagram('abba', 'babb')).toBe(false)
  })
  test('silent balistena should return true', () => {
    expect(isAnagram('silent', 'listen')).toBe(true)
  })
})
