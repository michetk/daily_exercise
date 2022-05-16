import { Menu, ChevronLeft } from '@styled-icons/material'
import { useContext } from 'react'
import { IconHeaderToggleContext } from '../../contexts/icon-header-toggle'
// import { useToggle } from '../../hooks/global/use-toggle'

const IconHeaderToggle = () => {
  const [isExpanded, setExpanded] = useContext(IconHeaderToggleContext)

  return isExpanded ? (
    <ChevronLeft onClick={setExpanded} />
  ) : (
    <Menu onClick={setExpanded} />
  )
}

export default IconHeaderToggle
