import { MENU_LIST } from '../../constants/menu/menu-list'
import { IconHeaderToggleContext } from '../../contexts/icon-header-toggle'
import { useToggle } from '../../hooks/use-toggle'
import MenuList from '../menu-list'
import { SidebarContainer, SidebarContent } from './styled'

const Sidebar = () => {
  const [isExpanded] = useToggle(IconHeaderToggleContext)

  return (
    <SidebarContainer isExpanded={isExpanded}>
      <SidebarContent>
        <MenuList list={MENU_LIST} />
      </SidebarContent>
    </SidebarContainer>
  )
}

export default Sidebar
