import { ITEM_LIST } from '../../constants/menu/menu-list'
import { IconHeaderToggleContext } from '../../contexts/icon-header-toggle'
import { useToggle } from '../../hooks/global/use-toggle'
import MenuList from '../menu-list'
import { SidebarContainer } from './styled'

const Sidebar = () => {
  const [isExpanded] = useToggle(IconHeaderToggleContext)
  return (
    <SidebarContainer isExpanded={isExpanded}>
      <MenuList list={ITEM_LIST} />
    </SidebarContainer>
  )
}

export default Sidebar
