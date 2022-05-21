import { Menu, ChevronLeft } from '@styled-icons/material'
import { IconHeaderToggleContext } from '../../contexts/icon-header-toggle'
import { useToggle } from '../../hooks/use-toggle'
import { IconHeaderToggleContainer } from './styled'

const IconHeaderToggle = () => {
  const [isExpanded, setExpanded] = useToggle(IconHeaderToggleContext)

  return isExpanded ? (
    <IconHeaderToggleContainer>
      <ChevronLeft onClick={setExpanded} />
    </IconHeaderToggleContainer>
  ) : (
    <IconHeaderToggleContainer>
      <Menu onClick={setExpanded} />
    </IconHeaderToggleContainer>
  )
}
export default IconHeaderToggle
