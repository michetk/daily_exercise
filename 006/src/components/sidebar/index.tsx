import { ITEM_LIST } from '../../constants/menu/menu-list'
import { useIconHeaderToggleContext } from '../../hooks/module/use-icon-header-toggle'
import MenuList from '../menu-list'
import { SidebarContainer } from './styled'

const Sidebar = () => {
  const [isExpanded] = useIconHeaderToggleContext()
  return (
    <SidebarContainer isExpanded={isExpanded}>
      <MenuList list={ITEM_LIST} />
    </SidebarContainer>
  )
}

export default Sidebar
