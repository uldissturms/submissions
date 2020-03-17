import gql from 'graphql-tag'

export const GET_LISTS = gql`
  {
    lists {
      id
      name
      items {
        slug
        name
      }
    }
  }
`;

export const CREATE_LIST = gql`
  mutation createList($name: String!) {
    createList(name: $name) {
      id
      name
      items {
        slug
        name
      }
    }
  }
`

export const DELETE_LIST = gql`
  mutation deleteList($id: ID!) {
    deleteList(id: $id)
  }
`

export const CREATE_ITEM = gql`
  mutation createListItem($listId: ID!, $item: ItemInput!) {
    createListItem(listId: $listId, item: $item) {
      slug
      name
    }
  }
`

export const DELETE_ITEM = gql`
  mutation deleteListItem($listId: ID!, $slug: ID!) {
    deleteListItem(listId: $listId, slug: $slug)
  }
`