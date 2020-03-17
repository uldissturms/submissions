import uuid from 'uuid/v4'
import { getLists } from '../Datastore'
import { IShoppingList } from '../Types'

export const createList = (name: string): IShoppingList => {
  const id = uuid()
  const list: IShoppingList = {
    id,
    name,
    items: []
  }

  getLists().push(list)
  return list
}
