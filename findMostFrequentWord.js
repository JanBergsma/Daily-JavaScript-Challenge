import { describe, expect, test } from 'vitest'

/**
 *
 * Find the Most Frequent Word
 * Given a string of words separated by spaces,
 * write a function to find the word that appears most frequently.
 * If two or more words have the same highest frequency,
 * return the word that appears last.
 * The function should ignore case
 * (i.e., 'Word' and 'word' are considered the same).
 *
 * Example:
 * Input: "This is a test. This test is only a test."
 * Output: "test"
 *
 * @param {String} text
 */
function findMostFrequentWord(text) {
  const words = text.split(' ').map((s) => s.replace(/\W/g, '').toLowerCase())

  let maxCount = 0
  let maxCountWord = null
  let counts = new Map()

  for (const w of words) {
    let count = counts.get(w)
    count = count === undefined ? 1 : count + 1
    counts[w] = count
    if (count >= maxCount) {
      maxCount = count
      maxCountWord = w
    }
  }

  return maxCountWord
}

describe('findMostFrequentWord', () => {
  test('"" should return ""', () => {
    expect(findMostFrequentWord('')).toBe('')
  })
  test('"This is a test. This test is only a test." should return "test"', () => {
    expect(
      findMostFrequentWord('This is a test. This test is only a test.')
    ).toBe('test')
  })
})
