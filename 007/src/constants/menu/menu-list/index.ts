import { MENU_ITEM } from '../menu-item'
import { MenuItemType, MenuListType } from '../types'

function generateMenuList(menuItem: MenuItemType[], depth = 0): MenuListType[] {
  return menuItem.map((item, idx) => ({
    ...item,
    id: `${depth}.${idx}`,
    depth,
    subItems: item.subItems
      ? generateMenuList(item.subItems, depth + 1)
      : undefined,
  }))
}

export const MENU_LIST = generateMenuList(MENU_ITEM)
