import { Menu, ChevronLeft } from '@styled-icons/material'
import { useIconHeaderToggleContext } from '../../hooks/models/use-icon-header-toggle'

const IconHeaderToggle = () => {
  const [isExpanded, setExpanded] = useIconHeaderToggleContext()

  return isExpanded ? (
    <ChevronLeft onClick={setExpanded} />
  ) : (
    <Menu onClick={setExpanded} />
  )
}

export default IconHeaderToggle
