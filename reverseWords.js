import { describe, expect, test } from 'vitest'

function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(' ')
}

describe('reverseWords', () => {
  test('"" should return " ', () => {
    expect(reverseWords('')).toBe('')
  })
  test('"the sky is blue" should return " ', () => {
    expect(reverseWords('the sky is blue')).toBe('blue is sky the')
  })
  test('"  hello world  " should return "world hello" ', () => {
    expect(reverseWords('  hello world  ')).toBe('world hello')
  })
  test(' "a good   example" should return " ', () => {
    expect(reverseWords('a good   example')).toBe('example good a')
  })
})
