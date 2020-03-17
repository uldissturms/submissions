import { IShoppingList } from './Types';

let lists: IShoppingList[] = [
  {
    id: 'covid-19',
    name: 'COVID-19',
    items: [
      { slug: 'pasta', name: 'pasta' },
      { slug: 'tinned-food', name: 'tinned food' },
      { slug: 'toilet-roll', name: 'toilet roll' },
      { slug: 'bread', name: 'bread' },
      { slug: 'tissues', name: 'tissues' },
      { slug: 'hand-sanitiser', name: 'hand sanitiser' },
      { slug: 'frozen-food', name: 'frozen food' },
      { slug: 'flour', name: 'flour' },
      { slug: 'biscuits', name: 'biscuits' },
      { slug: 'antibacterial-wipes', name: 'antibacterial wipes' },
      { slug: 'paracetamol', name: 'paracetamol' },
      { slug: 'soap', name: 'soap' },
      { slug: 'long-life-milk', name: 'long life milk' }
    ]
  },
  {
    id: 'wedding',
    name: 'Wedding',
    items: [
      { slug: 'brides-ring', name: "bride's ring" },
      { slug: 'champagne', name: 'champagne' }
    ]
  },
  {
    id: 'geek',
    name: 'Geek',
    items: [
      { slug: 'commodore-64', name: 'commodore 64' },
      { slug: 'atari-breakout', name: 'atari breakout' },
      { slug: 'sound-blaster', name: 'sound blaster' },
      { slug: 'ceramic-capacitor', name: 'ceramic capacitor' }
    ]
  }
]

export const getLists = (): IShoppingList[] => lists
export const setLists = (ls: IShoppingList[]) => {
  lists = ls
}