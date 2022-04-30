import IconHeaderToggle from '../icon-header-toggle'
import { HeaderContainer, HeaderIcon, HeaderTitle } from './styled'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderIcon>
        <IconHeaderToggle />
      </HeaderIcon>
      <HeaderTitle>Header</HeaderTitle>
    </HeaderContainer>
  )
}

export default Header
