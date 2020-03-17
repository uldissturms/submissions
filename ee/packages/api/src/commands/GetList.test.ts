import { setLists } from '../Datastore'
import { getLists } from './GetLists'
import { IShoppingList } from '../Types'

test('GetList - returns existing lists', () => {
  const name = 'test-name'
  const listId = 'test-id'
  const list: IShoppingList = {
    id: listId,
    name,
    items: []
  }

  setLists([list])

  expect(getLists()).toHaveLength(1)
})