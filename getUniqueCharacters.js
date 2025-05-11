import { describe, expect, test } from 'vitest'

/**
 *
 * Extract Unique Characters from a String
 * Write a function that takes a string as an
 * input and returns a new string containing
 * only the unique characters from the input
 * string, preserving the order of their first
 * appearance.
 *
 * Example:
 * Input: 'javascript'
 * Output: 'javscrit'
 *
 * @param {String s
 */
function getUniqueCharacters(s) {
  return [...new Set(s)].join('')
}

describe('getUniqueCharacters', () => {
  test('"sss"  should return "s"', () => {
    expect(getUniqueCharacters('sss')).toBe('s')
  })
  test('"javascript"  should return "javscript"', () => {
    expect(getUniqueCharacters('javascript')).toBe('javscript')
  })
})
