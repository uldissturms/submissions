import React, { useState } from 'react'
import { TwoColumns } from '../../components/Layout'
import { useQuery, useMutation } from '@apollo/react-hooks'
import {
  GET_LISTS,
  DELETE_LIST,
  DELETE_ITEM,
  CREATE_LIST,
  CREATE_ITEM
} from '../../queries'
import { IListsData, IList, IItem } from '../../Types'
import { ListOverview } from './components/ListOverview'

import { wrapInArray } from '../../utils'
import { ListDetails } from './components/ListDetails'

export const ListsContainer = () => {
  // TODO: error handling
  const { data } = useQuery<IListsData>(GET_LISTS, {
    onCompleted: () => {
      if (!data) {
        return
      }

      const { lists } = data
      setLists(lists)
      const [{ id }] = lists || []
      setSelectedListId(id)
    }
  })

  const [selectedListId, setSelectedListId] = useState<string>()
  const [lists, setLists] = useState<IList[]>([])

  const [createList] = useMutation(CREATE_LIST)
  const [deleteList] = useMutation(DELETE_LIST)
  const [createItem] = useMutation(CREATE_ITEM)
  const [deleteItem] = useMutation(DELETE_ITEM)

  const addListToState = (l: IList) => {
    setLists(ls => [...ls, l])
  }

  const updateList = (fn: (x: IList) => IList | undefined, listId: string) => {
    const listIdx = lists.findIndex(x => x.id === listId)

    setLists(ls => [
      ...ls.slice(0, listIdx),
      ...wrapInArray(fn(ls[listIdx])),
      ...ls.slice(listIdx + 1)
    ])
  }

  const addItemToState = (listId: string, i: IItem) => {
    updateList(
      l => ({
        ...l,
        items: [...l.items, i]
      }),
      listId
    )
  }

  const removeItemFromState = (listId: string, i: IItem) => {
    updateList(
      l => ({
        ...l,
        items: l.items.filter(x => x !== i)
      }),
      listId
    )
  }

  const removeListFromState = (listId: string) => {
    updateList(() => undefined, listId)
  }

  const list = lists.find(x => x.id === selectedListId)

  return (
    <TwoColumns
      left={
        <ListOverview
          data={lists}
          onCreateList={async (name: string) => {
            // TODO: error handling
            const { data } = await createList({
              variables: {
                name
              }
            })
            addListToState(data.createList)
          }}
          onSelectList={setSelectedListId}
        />
      }
      main={
        list && <ListDetails
          data={list}
          onCreateItem={async (item: IItem) => {
            // TODO: error handling
            const { data } = await createItem({
              variables: {
                listId: list.id,
                item
              }
            })
            addItemToState(list.id, data.createListItem)
          }}
          onDeleteItem={async (x: IItem) => {
            // TODO: error handling
            await deleteItem({
              variables: {
                listId: list.id,
                slug: x.slug,
              }
            })
            removeItemFromState(list.id, x)
          }}
          onDeleteList={async () => {
            // TODO: error handling
            await deleteList({
              variables: {
                id: list.id
              }
            })
            removeListFromState(list.id)
          }}
        />
      }
    />
  )
}
