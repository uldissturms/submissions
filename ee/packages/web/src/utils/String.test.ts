import { slugify } from './String'

test('String - slugify - single spaces', () => {
  expect(slugify('test word')).toBe('test-word')
})

test('String - slugify - multiple spaces', () => {
  expect(slugify('test  word')).toBe('test-word')
})
