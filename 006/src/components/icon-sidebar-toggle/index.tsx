import { ExpandLess, ExpandMore } from '@styled-icons/material'
import { useToggle } from '../../hooks/global/use-toggle'
import { IconSidebarToggleProps } from './interfaces'

const IconSidebarToggle = ({ onClick }: IconSidebarToggleProps) => {
  const [isExpanded, setExpanded] = useToggle()

  return isExpanded ? (
    <ExpandLess onClick={setExpanded} />
  ) : (
    <ExpandMore onClick={setExpanded} />
  )
}

export default IconSidebarToggle
