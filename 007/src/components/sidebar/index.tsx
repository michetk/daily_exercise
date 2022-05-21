import { IconHeaderToggleContext } from '../../contexts/icon-header-toggle'
import { useToggle } from '../../hooks/use-toggle'
import { SidebarContainer, SidebarContent } from './styled'

const Sidebar = () => {
  const [isExpanded] = useToggle(IconHeaderToggleContext)

  return (
    <SidebarContainer isExpanded={isExpanded}>
      <SidebarContent>
        <div>Sidebar</div>
      </SidebarContent>
    </SidebarContainer>
  )
}

export default Sidebar
