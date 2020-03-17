export interface IShoppingList {
  id: string,
  name: string
  items: IItem[]
}

export interface IItem {
  slug: string,
  name: string
}