import { describe, expect, test } from 'vitest'

function longestCommonPrefix(ss) {
  const minLength = ss.reduce(
    (acc, val) => Math.min(acc, val.length),
    ss ? ss[0].length : 0
  )

  for (let i = 0; i < minLength; ++i) {
    for (const s of ss) {
      if (s[i] !== ss[0][i]) {
        return ss[0].slice(0, i)
      }
    }
  }

  return ss[0].slice(0, minLength)
}

describe('getUniqueCharacters', () => {
  test('[""] should return ""', () => {
    expect(longestCommonPrefix([''])).toBe('')
  })
  test('["flower","flow","flight"] should return "fl"', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
  })
  test('["dog","racecar","car"] should return ""', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')
  })
})
