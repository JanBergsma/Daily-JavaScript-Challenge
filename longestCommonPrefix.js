import { describe, expect, test } from 'vitest'
/**
 *
 * Find the Longest Common Prefix
 * Given an array of strings, find the longest common prefix string a
 * mongst them. If there is no common prefix, return an empty string.
 *
 * Example:
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 * @param {*} ss
 * @returns
 */
function longestCommonPrefix(ss) {
  if (!ss) {
    return ''
  }
  let maxPrefix = ss[0].slice(0)

  for (const s of ss.slice(1, ss.size)) {
    let endIndex = Math.min(s.length, maxPrefix.length)
    while (endIndex >= 0 && !s.startsWith(maxPrefix)) {
      maxPrefix = maxPrefix.slice(0, endIndex)
      endIndex--
    }
  }

  return maxPrefix
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
