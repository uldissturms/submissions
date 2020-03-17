import { wrapInArray } from './Array'

test('Array - wrapInArray - undefined', () => {
  expect(wrapInArray(undefined)).toEqual([])
})

test('Array - wrapInArray - object', () => {
  const x = {
    a: '1'
  }
  expect(wrapInArray(x)).toEqual([x])
})
