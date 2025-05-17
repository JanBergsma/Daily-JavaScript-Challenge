import { describe, expect, test } from 'vitest'
/**
 *
 * String Rotation Checker
 * Given two strings, determine if one string is a
 * rotation of another.
 * This means checking if one string can be formed by
 * taking some starting portion of the other string and
 * moving it to the back.
 *
 *
 * Example:
 * Input: ('waterbottle', 'erbottlewat')
 * Output: true
 *
 *
 * @param {string} s1
 * @param {string} s2
 *
 * @returns {boolean}
 *
 *  */
function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false

  for (let i = s1.length - 1; i > 0; --i) {
    if (s2 === s1.slice(i) + s1.slice(0, i)) {
      return true
    }
  }

  return false
}

describe('isRotation', () => {
  test('abcd, acbd should return false', () => {
    expect(isRotation('abcd', 'acbd')).toBe(false)
  })
  test('abcd, cbd should return false', () => {
    expect(isRotation('abcd', 'cbd')).toBe(false)
  })
  test('waterbottle, erbottewat should return false', () => {
    expect(isRotation('waterbottle', 'erbottewat')).toBe(false)
  })
  test('abcd, cdab should return true', () => {
    expect(isRotation('abcd', 'cdab')).toBe(true)
  })
  test('aab, aba should return true', () => {
    expect(isRotation('aab', 'aba')).toBe(true)
  })
  test('waterbottle, erbottlewat should return true', () => {
    expect(isRotation('waterbottle', 'erbottlewat')).toBe(true)
  })
})
