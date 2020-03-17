import { getLists, setLists } from '../Datastore'
import { IItem, IShoppingList } from '../Types'
import { createListItem } from './CreateItem'

test('CreateItem - adds new item to list', () => {
  const name = 'test-name'
  const listId = 'test-id'

  const list: IShoppingList = {
    id: listId,
    name,
    items: []
  }
  const item: IItem = {
    name,
    slug: name
  }
  const lists = [list]

  setLists(lists)

  createListItem(listId, item)

  expect(getLists()).toEqual([
    {
      ...list,
      items: [item]
    }
  ])
})

test('CreateItem - throw for missing list', () => {
  const name = 'test'
  const listId = 'not-existing-id'

  const item: IItem = {
    name,
    slug: name
  }

  setLists([])

  expect(() => createListItem(listId, item)).toThrow(`List not found: ${listId}`)

})
