import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  background-color: ${({ theme }) => theme.colors.primary.blue.main};
`

export const HeaderTitle = styled.div`
  margin: auto;
`

export const HeaderIconToggle = styled.div`
  margin-left: 20px;
`
