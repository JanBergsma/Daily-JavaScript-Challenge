import { describe, expect, test } from 'vitest'

const TRANSLATE = { ')': '(', ']': '[', '}': '{' }

/**
 * Valid Parentheses Checker
 * Given a string containing
 * just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * An input string is valid if: 1.
 * Open brackets must be closed by the same type of brackets. 2.
 *  Open brackets must be closed in the correct order.
 *  An empty string is also considered
 *
 *
 * @param {String} s
 * @returns
 */
function isValidParentheses(s) {
  let stack = []
  for (const ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch)
    } else {
      const ch1 = stack.pop()
      if (ch1 === undefined || ch1 !== TRANSLATE[ch]) {
        return false
      }
    }
  }
  return stack.length === 0
}

describe('isValidParentheses', () => {
  test('"" should return true', () => {
    expect(isValidParentheses('')).toBe(true)
  })
  test('"()" should return true', () => {
    expect(isValidParentheses('()')).toBe(true)
  })
  test('"()[]{}"  should return true', () => {
    expect(isValidParentheses('()[]{}')).toBe(true)
  })
  test('"(x"  should return false', () => {
    expect(isValidParentheses('(x')).toBe(false)
  })
  test('"(]"  should return false', () => {
    expect(isValidParentheses('(]')).toBe(false)
  })
  test('"([])"   should return true', () => {
    expect(isValidParentheses('([])')).toBe(true)
  })
})
