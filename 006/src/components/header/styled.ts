import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  user-select: none;
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.text.light_100};
`

export const HeaderTitle = styled.div`
  margin: auto;
`

export const HeaderIconToggle = styled.div`
  margin-left: 10px;

  & svg {
    height: 30px;
    cursor: pointer;
    animation: ${({ theme }) => theme.animations.fadein} 0.5s ease;
  }
`
