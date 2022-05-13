import IconHeaderToggle from '../icon-header-toggle'
import { HeaderContainer, HeaderIconToggle, HeaderTitle } from './styled'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderIconToggle>
        <IconHeaderToggle />
      </HeaderIconToggle>
      <HeaderTitle>Header</HeaderTitle>
    </HeaderContainer>
  )
}

export default Header
