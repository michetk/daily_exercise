import { Menu, ChevronLeft } from '@styled-icons/material'
import { IconHeaderToggleContext } from '../../contexts/icon-header-toggle'
import { useToggle } from '../../hooks/global/use-toggle'

const IconHeaderToggle = () => {
  const [isExpanded, setExpanded] = useToggle(IconHeaderToggleContext)

  return isExpanded ? (
    <ChevronLeft onClick={setExpanded} />
  ) : (
    <Menu onClick={setExpanded} />
  )
}

export default IconHeaderToggle
