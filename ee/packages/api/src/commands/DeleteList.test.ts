import { getLists, setLists } from '../Datastore'
import { deleteList } from './DeleteList'
import { IShoppingList } from '../Types'

test('DeleteList - removes existing list', () => {
  const name = 'test-name'
  const listId = 'test-id'
  const list: IShoppingList = {
    id: listId,
    name,
    items: []
  }

  setLists([list])

  expect(getLists()).toHaveLength(1)

  deleteList(listId)

  expect(getLists()).toHaveLength(0)
})