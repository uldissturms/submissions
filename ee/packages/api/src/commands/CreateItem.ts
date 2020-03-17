import { getLists } from '../Datastore'
import { IItem } from '../Types'

export const createListItem = (listId: string, item: IItem): IItem => {
  const lists = getLists()
  const list = lists.find(x => x.id === listId)

  if (!list) {
    throw new Error(`List not found: ${listId}`)
  }

  list.items = [...list.items, item]
  return item
}
