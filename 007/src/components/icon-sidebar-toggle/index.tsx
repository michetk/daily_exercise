import { ExpandMore, ExpandLess } from '@styled-icons/material'
import { useToggle } from '../../hooks/use-toggle'
import { IconSidebarToggleProps } from './interfaces'
import { IconSidebarToggleContainer } from './styled'

const IconSidebarToggle = ({ onClick }: IconSidebarToggleProps) => {
  const [isExpanded, setExpanded] = useToggle(onClick)

  return isExpanded ? (
    <IconSidebarToggleContainer>
      <ExpandLess onClick={setExpanded} />
    </IconSidebarToggleContainer>
  ) : (
    <IconSidebarToggleContainer>
      <ExpandMore onClick={setExpanded} />
    </IconSidebarToggleContainer>
  )
}

export default IconSidebarToggle
