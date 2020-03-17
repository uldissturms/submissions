import { getLists, setLists } from '../Datastore'
import { createList } from './CreateList'

test('CreateList - adds new list by name', () => {
  const name = 'test-name'

  setLists([])

  createList(name)

  expect(getLists()).toEqual(expect.arrayContaining([expect.objectContaining({ name, items: [] })]))
})