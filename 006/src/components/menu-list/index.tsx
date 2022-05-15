import MenuItem from '../menu-item'
import { MenuListProps } from './interfaces'
import { MenuListContainer } from './styled'

const MenuList = ({ list }: MenuListProps) => {
  return (
    <MenuListContainer>
      {list.map(item => (
        <MenuItem MenuItem={item} key={item.id} />
      ))}
    </MenuListContainer>
  )
}

export default MenuList
