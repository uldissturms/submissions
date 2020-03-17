import { getLists, setLists } from '../Datastore'

export const deleteList = (id: string) => {
  const lists = getLists()
  setLists(lists.filter(x => x.id !== id))
}
