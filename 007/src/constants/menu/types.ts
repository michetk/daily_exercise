import { ComponentType } from 'react'

export type MenuItemType = {
  name: string
  url: string
  icon: ComponentType
  subItems?: MenuItemType[]
}

export type MenuListType = MenuItemType & {
  id: string
  depth: number
  subItems?: MenuListType[]
}
