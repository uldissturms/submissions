import {
  getLists,
  createList,
  deleteList,
  createListItem,
  deleteListItem
} from './commands'

export const resolvers = {
  Query: {
    lists: () => getLists()
  },
  Mutation: {
    createList: (_, { name }) => {
      return createList(name)
    },
    deleteList: (_, { id }) => {
      deleteList(id)
      return id
    },
    createListItem: (_, { listId, item }) => {
      return createListItem(listId, item)
    },
    deleteListItem: (_, { listId, slug }) => {
      deleteListItem(listId, slug)
      return slug
    }
  }
}
