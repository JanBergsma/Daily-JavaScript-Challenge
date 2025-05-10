import { describe, expect, test } from 'vitest'
let CACHE = [0, 1]

function fibonacci(n) {
  if (n < CACHE.length) return CACHE[n]
  CACHE[n] = fibonacci(n - 1) + fibonacci(n - 2)
  return CACHE[n]
}

describe('fibonacci', () => {
  test('0 should return 0 ', () => {
    expect(fibonacci(0)).toBe(0)
  })
  test('1 should return 1 ', () => {
    expect(fibonacci(1)).toBe(1)
  })
  test('2 should return 1 ', () => {
    expect(fibonacci(2)).toBe(1)
  })
  test('3 should return 2', () => {
    expect(fibonacci(3)).toBe(2)
  })
  test('10 should return 55', () => {
    expect(fibonacci(10)).toBe(55)
  })
})
describe('fibonacci mass', () => {
  const A000045 = [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
    2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811,
    514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352,
    24157817, 39088169, 63245986, 102334155,
  ]

  test('0 should return 0 ', () => {
    expect(A000045.every((v, i) => fibonacci(i) === v)).toBe(true)
  })
})
