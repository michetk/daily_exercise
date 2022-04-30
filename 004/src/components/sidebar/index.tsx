import { useIconHeaderToggleContext } from '../../hooks/module/use-icon-header-toggle'
import { SidebarContainer } from './styled'

const Sidebar = () => {
  const [isExpanded] = useIconHeaderToggleContext()
  return <SidebarContainer isExpanded={isExpanded}>Sidebar</SidebarContainer>
}

export default Sidebar
