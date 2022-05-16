import { useContext } from 'react'
import { ITEM_LIST } from '../../constants/menu/menu-list'
import { IconHeaderToggleContext } from '../../contexts/icon-header-toggle'
import MenuList from '../menu-list'
import { SidebarContainer } from './styled'

const Sidebar = () => {
  const [isExpanded] = useContext(IconHeaderToggleContext)
  return (
    <SidebarContainer isExpanded={isExpanded}>
      <MenuList list={ITEM_LIST} />
    </SidebarContainer>
  )
}

export default Sidebar
