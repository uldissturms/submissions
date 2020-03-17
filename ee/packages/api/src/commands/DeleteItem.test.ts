import { getLists, setLists } from '../Datastore'
import { IItem, IShoppingList } from '../Types'
import { deleteListItem } from './DeleteItem'

test('DeleteItem - removes item from list', () => {
  const name = 'test-name'
  const listId = 'test-id'

  const item: IItem = {
    name,
    slug: name
  }

  const list: IShoppingList = {
    id: listId,
    name,
    items: [
      item
    ]
  }
  const lists = [list]

  setLists(lists)

  deleteListItem(listId, item.slug)

  expect(getLists()).toEqual([
    {
      ...list,
      items: []
    }
  ])
})