import { describe, expect, test } from 'vitest'

/**
 * Check for Balanced Brackets in a String
 * Write a function that checks if a given string has balanced brackets.
 * The brackets to be checked are:
 *  parentheses `()`,
 *  square brackets `[]`, and
 * curly braces `{}`.
 *
 * A string is considered balanced if every opening bracket
 * has a corresponding and correctly placed closing bracket.
 * The function should return `true` if the brackets are balanced,
 * otherwise `false`.
 *
 * Example:
 * Input: "[{()}]()"
 * Output: true
 * @param {string} s - a string conating brackets
 */
function isBalancedBrackets(s) {
  const trans = { ')': '(', ']': '[', '}': '{' }
  const stack = []

  for (const ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch)
    } else {
      const ch1 = stack.pop()
      if (ch1 === -undefined || ch1 !== trans[ch]) {
        return false
      }
    }
  }
  return stack.length === 0
}

describe('isBalancedBracket should return true', () => {
  test('"" should return true', () => {
    expect(isBalancedBrackets('')).toBeTruthy()
  })
  test('"[{()}]()" should return true', () => {
    expect(isBalancedBrackets('[{()}]()')).toBeTruthy()
  })
  test('"[]" should return true', () => {
    expect(isBalancedBrackets('[]')).toBeTruthy()
  })
  test('"[({})]{}" should return true', () => {
    expect(isBalancedBrackets('[({})]{}')).toBeTruthy()
  })
})

describe('isBalancedBrackets false tests', () => {
  test('"[" should return false', () => {
    expect(isBalancedBrackets('[')).toBeFalsy()
  })
  test('"[{()}])" should return false', () => {
    expect(isBalancedBrackets('[{()}])')).toBeFalsy()
  })
  test('"{" should return false', () => {
    expect(isBalancedBrackets('{')).toBeFalsy()
  })
  test('")" should return false', () => {
    expect(isBalancedBrackets(')')).toBeFalsy()
  })
  test('"[{(})]" should return false', () => {
    expect(isBalancedBrackets('[{(})]')).toBeFalsy()
  })
})
