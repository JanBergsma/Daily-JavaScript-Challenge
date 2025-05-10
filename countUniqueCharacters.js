import { describe, expect, test } from 'vitest'

/**
 * Count Unique Characters
 * Given a string, write a function to count the
 * number of unique characters in the string,
 * ignoring case and considering only
 * alphabetic characters.
 *
 *
 * @param {*} s
 * @returns
 */
function countUniqueCharacters(s) {
  const s1 = s.replace(/\W/g, '').toLowerCase()
  return new Set(s1).size
}

describe('countUniqueCharacters', () => {
  test('"" should return 0 ', () => {
    expect(countUniqueCharacters('')).toBe(0)
  })
  test('"Hello World!" should return 7 ', () => {
    expect(countUniqueCharacters('Hello World!')).toBe(7)
  })
  test('"Hh" should return 1 ', () => {
    expect(countUniqueCharacters('Hh')).toBe(1)
  })
})
