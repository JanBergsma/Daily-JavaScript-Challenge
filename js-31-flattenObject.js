import { describe, expect, test } from 'vitest'

/**
 * Flatten Nested Objects
 * Given a deeply nested JavaScript object, implement a function to flatten it into a single level object with keys representing the path to each nested key. The keys in the flattened object should be separated by dots `.`.
 *
 * Example:
 * Input: {"a": {"b": {"c": 1}}, "d": 2}
 * Output: {"a.b.c": 1, "d": 2}
 *
 * @param {Object} o object to be flatten
 * @returns
 */
function flattenObject(o, path) {
  function _dsp(o, path, acc) {
    for (const [key, value] of Object.entries(o)) {
      const p1 = path ? `${path}.${key}` : `${key}`
      if (typeof value === 'object') {
        _dsp(value, p1, acc)
      } else {
        acc[p1] = value
      }
    }
    return eval(acc)
  }
  return _dsp(o, '', {})
}

describe('flattenObject', () => {
  test(' {"a": {"b": {"c": 1}}, "d": 2} should return {"a.b.c": 1, "d": 2}', () => {
    expect(flattenObject({ a: { b: { c: 1 } }, d: 2 })).toMatchObject({
      'a.b.c': 1,
      d: 2,
    })
  })

  test(' {"x": {"y": {"z": {"u": 5}}}, "v": 3}should return {"a.b.c": 1, "d": 2}', () => {
    expect(flattenObject({ x: { y: { z: { u: 5 } } }, v: 3 })).toMatchObject({
      'x.y.z.u': 5,
      v: 3,
    })
  })

  test('{"foo": {"bar": {"baz": {"qux": 7}}, "quux": 8}, "corge": 9} should return {"foo.bar.baz.qux": 7, "foo.quux": 8, "corge": 9}', () => {
    expect(
      flattenObject({ foo: { bar: { baz: { qux: 7 } }, quux: 8 }, corge: 9 })
    ).toMatchObject({ 'foo.bar.baz.qux': 7, 'foo.quux': 8, corge: 9 })
  })

  test('{"nested": {"deep": {"value": 10, "another": {"level": 20}}} should return {"nested.deep.value": 10, "nested.deep.another.level": 20}}', () => {
    expect(
      flattenObject({ nested: { deep: { value: 10, another: { level: 20 } } } })
    ).toMatchObject({
      'nested.deep.value': 10,
      'nested.deep.another.level': 20,
    })
  })
  test('{ {"simple": 1, "nested": {"complicated": {"structure": 5}}} should return {"simple": 1, "nested.complicated.structure": 5}', () => {
    expect(
      flattenObject({ simple: 1, nested: { complicated: { structure: 5 } } })
    ).toMatchObject({ simple: 1, 'nested.complicated.structure': 5 })
  })
})
