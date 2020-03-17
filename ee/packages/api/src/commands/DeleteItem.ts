import { getLists } from '../Datastore'

export const deleteListItem = (listId: string, slug: string) => {
  const lists = getLists()
  const list = lists.find(x => x.id === listId)
  list.items = list.items.filter(x => x.slug !== slug)
}
