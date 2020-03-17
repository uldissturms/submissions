export interface IItem {
  slug: string
  name: string
}

export interface IList {
  id: string
  name: string
  items: IItem[]
}

export interface IListsData {
  lists: IList[]
}
